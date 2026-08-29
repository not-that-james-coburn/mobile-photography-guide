import {
  Aperture,
  Contrast,
  Droplets,
  Focus,
  Grid3x3,
  Hand,
  MoveUp,
  Sparkles,
  SunMedium,
  Timer,
  X,
  ZoomIn,
} from "lucide-react";
import {
  CloserPair,
  CompareToggle,
  EditPlay,
  ExposurePlay,
  FocusOverlay,
  LinesOverlay,
  ThirdsOverlay,
} from "@/components/book/diagrams";
import { Photo } from "@/components/book/photo";
import { CHAPTERS, PAGES, type BookPage, type ChapterId } from "@/lib/book/content";

const TIP_ICONS = [Droplets, Grid3x3, ZoomIn, Focus, Timer, SunMedium];
const TRAP_ICONS = [Droplets, MoveUp, SunMedium, Contrast, Aperture, Sparkles];

function ChapterMark({ id }: { id: ChapterId }) {
  const chapter = CHAPTERS.find((c) => c.id === id);
  if (!chapter) return null;
  return <p className="text-kicker text-gold">{chapter.label}</p>;
}

function Heading({
  kicker,
  title,
  chapter,
}: {
  kicker?: string;
  title: string;
  chapter?: ChapterId;
}) {
  return (
    <header className="mb-3">
      {kicker ? <p className="text-kicker text-gold">{kicker}</p> : chapter ? <ChapterMark id={chapter} /> : null}
      <h1 className="font-display text-title text-ink">{title}</h1>
    </header>
  );
}

function Body({ children }: { children?: string }) {
  if (!children) return null;
  return <p className="mb-4 text-body text-ink/90 text-pretty">{children}</p>;
}

function Overlay({ kind }: { kind?: BookPage["overlay"] }) {
  if (kind === "thirds") return <ThirdsOverlay />;
  if (kind === "lines") return <LinesOverlay />;
  if (kind === "focus") return <FocusOverlay />;
  return null;
}

export function PageView({
  page,
  onJump,
  resumeFrom,
}: {
  page: BookPage;
  onJump: (index: number) => void;
  resumeFrom?: number;
}) {
  if (page.kind === "cover") {
    return (
      <div className="flex min-h-full flex-col">
        <div className="relative min-h-72 flex-1">
          <img
            src={page.image}
            alt={page.alt ?? ""}
            className="absolute inset-0 size-full object-cover object-top"
            draggable={false}
          />
        </div>
        <div className="px-6 pb-5 pt-5">
          <p className="text-kicker text-signal">Picture book · 20 pages</p>
          <h1 className="mt-2 font-display text-display text-ink text-balance">
            {page.title}
          </h1>
          <p className="mt-3 max-w-sm text-body text-ink/85 text-pretty">
            {page.body}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => onJump(1)}
              className="inline-flex h-12 items-center rounded-full bg-signal px-5 text-sm font-semibold text-cream transition-transform duration-150 ease-out active:scale-[0.96]"
            >
              Open the book
            </button>
            {resumeFrom && resumeFrom > 0 ? (
              <button
                type="button"
                onClick={() => onJump(resumeFrom)}
                className="inline-flex h-12 items-center rounded-full bg-cream px-5 text-sm font-semibold text-ink shadow-border transition-transform duration-150 ease-out active:scale-[0.96]"
              >
                Continue · {String(resumeFrom + 1).padStart(2, "0")}
              </button>
            ) : null}
          </div>
        </div>
      </div>
    );
  }

  if (page.kind === "toc") {
    return (
      <div className="px-6 pb-8 pt-2">
        <Heading title={page.title} />
        <Body>{page.body}</Body>
        <ol className="flex flex-col gap-6">
          {CHAPTERS.map((chapter) => {
            const entries = PAGES.map((p, index) => ({ p, index })).filter(
              ({ p }) => p.chapter === chapter.id,
            );
            return (
              <li key={chapter.id}>
                <p className="text-kicker text-gold">{chapter.label}</p>
                <p className="mb-2 font-display text-lg text-ink">{chapter.line}</p>
                <ul className="flex flex-col">
                  {entries.map(({ p, index }) => (
                    <li key={p.id}>
                      <button
                        type="button"
                        onClick={() => onJump(index)}
                        className="flex min-h-11 w-full items-baseline justify-between gap-3 border-b border-ink/8 py-2 text-left"
                      >
                        <span className="text-sm text-ink text-pretty">{p.title}</span>
                        <span className="font-display text-sm tabular-nums text-signal">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }

  if (page.kind === "compare" && page.left && page.right) {
    return (
      <article className="px-6 pb-8 pt-2">
        <Heading kicker={page.kicker} title={page.title} chapter={page.chapter} />
        <Body>{page.body}</Body>
        <CompareToggle left={page.left} right={page.right} />
      </article>
    );
  }

  if (page.kind === "play" && page.image) {
    const isEdit = page.id === "edit";
    return (
      <article className="px-6 pb-8 pt-2">
        <Heading kicker={page.kicker} title={page.title} chapter={page.chapter} />
        <Body>{page.body}</Body>
        {isEdit ? (
          <EditPlay src={page.image} alt={page.alt ?? ""} />
        ) : (
          <ExposurePlay src={page.image} alt={page.alt ?? ""} />
        )}
      </article>
    );
  }

  if (page.kind === "tips" && page.tips) {
    const icons = page.id === "traps" ? TRAP_ICONS : TIP_ICONS;
    return (
      <article className="px-6 pb-8 pt-2">
        <Heading kicker={page.kicker} title={page.title} chapter={page.chapter} />
        <Body>{page.body}</Body>
        {page.image ? (
          <Photo
            src={page.image}
            alt={page.alt ?? ""}
            aspect="compact"
            className="mb-4"
            imgClassName="object-top"
          />
        ) : null}
        <ul className="flex flex-col gap-3">
          {page.tips.map((tip, i) => {
            const Icon = icons[i] ?? Hand;
            return (
              <li
                key={tip.title}
                className="flex gap-3 rounded-2xl bg-cream p-3 shadow-border"
              >
                <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full bg-soft text-signal">
                  <Icon className="size-5" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="font-medium text-ink">{tip.title}</p>
                  <p className="text-sm text-muted text-pretty">{tip.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </article>
    );
  }

  if (page.kind === "practice" && page.steps) {
    return (
      <article className="px-6 pb-8 pt-2">
        <Heading kicker={page.kicker} title={page.title} chapter={page.chapter} />
        <Body>{page.body}</Body>
        <ol className="flex flex-col gap-3">
          {page.steps.map((step) => (
            <li key={step.title} className="rounded-2xl bg-cream p-4 shadow-border">
              <p className="font-display text-lg text-ink">{step.title}</p>
              <p className="mt-1 text-sm text-muted text-pretty">{step.text}</p>
            </li>
          ))}
        </ol>
      </article>
    );
  }

  if (page.kind === "end") {
    return (
      <article className="flex min-h-full flex-col px-6 pb-8 pt-2">
        <Heading title={page.title} chapter={page.chapter} />
        <Body>{page.body}</Body>
        {page.image ? (
          <Photo src={page.image} alt={page.alt ?? ""} caption={page.caption} />
        ) : null}
        <p className="mt-6 font-display text-xl text-ink text-balance">
          Twenty frames. One keeper. That’s the whole practice.
        </p>
      </article>
    );
  }

  const wide =
    page.image?.endsWith("thirds.jpg") || page.image?.endsWith("hands.jpg");

  return (
    <article className="px-6 pb-8 pt-2">
      <Heading kicker={page.kicker} title={page.title} chapter={page.chapter} />
      <Body>{page.body}</Body>
      {page.id === "closer" && page.image ? (
        <div className="flex flex-col gap-4">
          <CloserPair src={page.image} alt={page.alt ?? ""} />
          {page.caption ? (
            <p className="text-caption text-muted text-pretty">{page.caption}</p>
          ) : null}
        </div>
      ) : page.image ? (
        <Photo
          src={page.image}
          alt={page.alt ?? ""}
          caption={page.caption}
          aspect={wide ? "wide" : "photo"}
        >
          <Overlay kind={page.overlay} />
        </Photo>
      ) : null}
    </article>
  );
}

export function TocSheet({
  open,
  current,
  onJump,
  onClose,
}: {
  open: boolean;
  current: number;
  onJump: (index: number) => void;
  onClose: () => void;
}) {
  if (!open) return null;
  return (
    <div className="absolute inset-0 z-30 flex flex-col bg-paper">
      <div className="flex items-center justify-between px-4 py-3">
        <p className="font-display text-xl text-ink">Contents</p>
        <button
          type="button"
          onClick={onClose}
          className="flex size-11 items-center justify-center rounded-full text-ink"
          aria-label="Close contents"
        >
          <X className="size-5" strokeWidth={1.75} />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto px-6 pb-10">
        <PageView page={PAGES[1]} onJump={onJump} />
      </div>
    </div>
  );
}
