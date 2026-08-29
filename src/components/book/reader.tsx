import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, List } from "lucide-react";
import { PageView, TocSheet } from "@/components/book/page-view";
import { LAST_PAGE_INDEX, PAGES } from "@/lib/book/content";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "you-can-shoot-this:page";

function clampPage(n: number) {
  return Math.max(0, Math.min(LAST_PAGE_INDEX, n));
}

function readSavedPage() {
  if (typeof window === "undefined") return 0;
  const raw = window.localStorage.getItem(STORAGE_KEY);
  const n = raw ? Number.parseInt(raw, 10) : 0;
  return Number.isFinite(n) ? clampPage(n) : 0;
}

export function BookReader() {
  const [page, setPage] = useState(0);
  const [saved, setSaved] = useState(0);
  const [toc, setToc] = useState(false);
  const [dir, setDir] = useState<1 | -1>(1);
  const touch = useRef<{ x: number; y: number } | null>(null);
  const scroller = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSaved(readSavedPage());
  }, []);

  const go = useCallback((next: number, direction: 1 | -1) => {
    const clamped = clampPage(next);
    setDir(direction);
    setPage(clamped);
    setSaved(clamped);
    setToc(false);
    window.localStorage.setItem(STORAGE_KEY, String(clamped));
    scroller.current?.scrollTo({ top: 0 });
  }, []);

  const next = useCallback(() => go(page + 1, 1), [go, page]);
  const prev = useCallback(() => go(page - 1, -1), [go, page]);
  const jump = useCallback((index: number) => go(index, index >= page ? 1 : -1), [go, page]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight" || e.key === "PageDown") {
        e.preventDefault();
        go(page + 1, 1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        go(page - 1, -1);
      } else if (e.key === "Home") {
        e.preventDefault();
        go(0, -1);
      } else if (e.key === "End") {
        e.preventDefault();
        go(LAST_PAGE_INDEX, 1);
      } else if (e.key === "Escape") {
        setToc(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, page]);

  const current = PAGES[page];
  const isCover = current.kind === "cover";
  const progress = ((page + 1) / PAGES.length) * 100;

  return (
    <div className="min-h-dvh bg-desk">
      <div className="relative mx-auto flex h-dvh w-full max-w-md flex-col overflow-hidden bg-paper shadow-page">
        <div
          className="absolute inset-x-0 top-0 z-20 h-0.5 bg-soft"
          aria-hidden="true"
        >
          <div
            className="h-full bg-signal transition-[width] duration-200 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {!isCover ? (
          <header className="relative z-10 grid grid-cols-3 items-center px-2 pt-3">
            <button
              type="button"
              onClick={() => setToc(true)}
              className="flex h-11 w-fit items-center gap-1.5 rounded-full px-3 text-ink"
              aria-label="Open contents"
            >
              <List className="size-5" strokeWidth={1.75} />
              <span className="text-sm font-medium">Index</span>
            </button>
            <p className="justify-self-center font-display text-sm tabular-nums text-signal" aria-live="polite">
              {String(page + 1).padStart(2, "0")}
              <span className="text-muted"> / {String(PAGES.length).padStart(2, "0")}</span>
            </p>
            <span aria-hidden="true" />
          </header>
        ) : null}

        <div
          ref={scroller}
          className="relative min-h-0 flex-1 overflow-y-auto overscroll-contain"
          onTouchStart={(e) => {
            const t = e.changedTouches[0];
            touch.current = { x: t.clientX, y: t.clientY };
          }}
          onTouchEnd={(e) => {
            if (!touch.current) return;
            if ((e.target as HTMLElement).closest("input, button, a")) {
              touch.current = null;
              return;
            }
            const t = e.changedTouches[0];
            const dx = t.clientX - touch.current.x;
            const dy = t.clientY - touch.current.y;
            touch.current = null;
            if (Math.abs(dx) < 56 || Math.abs(dx) < Math.abs(dy) * 1.2) return;
            if (dx < 0) next();
            else prev();
          }}
        >
          <div
            key={current.id}
            className={cn("min-h-full", dir === 1 ? "page-in-next" : "page-in-prev")}
          >
            <PageView page={current} onJump={jump} resumeFrom={saved} />
          </div>
        </div>

        <nav className="relative z-10 flex items-center justify-between gap-3 border-t border-ink/8 bg-paper px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
          <button
            type="button"
            onClick={prev}
            disabled={page === 0}
            className="flex h-12 min-w-12 items-center justify-center rounded-full pl-3 pr-3.5 text-ink disabled:text-muted/40"
            aria-label="Previous page"
          >
            <ChevronLeft className="size-5" strokeWidth={1.75} />
            <span className="text-sm font-medium">Back</span>
          </button>
          <button
            type="button"
            onClick={next}
            disabled={page === LAST_PAGE_INDEX}
            className="flex h-12 min-w-12 items-center justify-center rounded-full bg-signal pl-4 pr-3.5 text-cream disabled:bg-soft disabled:text-muted/50"
            aria-label="Next page"
          >
            <span className="text-sm font-semibold">
              {page === LAST_PAGE_INDEX ? "Done" : "Next"}
            </span>
            <ChevronRight className="size-5" strokeWidth={1.75} />
          </button>
        </nav>

        <TocSheet
          open={toc}
          current={page}
          onJump={jump}
          onClose={() => setToc(false)}
        />
      </div>
    </div>
  );
}
