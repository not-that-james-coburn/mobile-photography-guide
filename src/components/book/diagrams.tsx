import { useState } from "react";
import { Photo } from "@/components/book/photo";
import { cn } from "@/lib/utils";

export function ThirdsOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div className="absolute inset-y-0 left-1/3 w-px bg-cream/90 mix-blend-overlay" />
      <div className="absolute inset-y-0 left-1/3 w-px bg-ink/40" />
      <div className="absolute inset-y-0 left-2/3 w-px bg-cream/90 mix-blend-overlay" />
      <div className="absolute inset-y-0 left-2/3 w-px bg-ink/40" />
      <div className="absolute inset-x-0 top-1/3 h-px bg-cream/90 mix-blend-overlay" />
      <div className="absolute inset-x-0 top-1/3 h-px bg-ink/40" />
      <div className="absolute inset-x-0 top-2/3 h-px bg-cream/90 mix-blend-overlay" />
      <div className="absolute inset-x-0 top-2/3 h-px bg-ink/40" />
      <span className="absolute top-[62%] left-[66%] size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold shadow-mark" />
    </div>
  );
}

export function LinesOverlay() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 size-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M8 92 L48 38"
        fill="none"
        stroke="currentColor"
        className="text-cream/80"
        strokeWidth="1.2"
      />
      <path
        d="M92 92 L52 38"
        fill="none"
        stroke="currentColor"
        className="text-cream/80"
        strokeWidth="1.2"
      />
      <circle cx="50" cy="36" r="1.6" className="fill-gold" />
    </svg>
  );
}

export function FocusOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div className="absolute top-[42%] left-[48%] size-[28%] -translate-x-1/2 -translate-y-1/2 rounded-sm border-2 border-gold" />
      <p className="absolute top-[58%] left-[48%] -translate-x-1/2 rounded-full bg-ink/70 px-2.5 py-1 text-micro font-medium tracking-wide text-cream">
        Tap to focus
      </p>
    </div>
  );
}

export function ExposurePlay({ src, alt }: { src: string; alt: string }) {
  const [ev, setEv] = useState(0);
  const brightness = 1 + ev * 0.45;

  return (
    <div>
      <Photo
        src={src}
        alt={alt}
        aspect="photo"
        imgStyle={{ filter: `brightness(${brightness})` }}
      >
        <div className="absolute top-3 right-3 rounded-full bg-ink/70 px-2.5 py-1 text-micro font-medium tabular-nums text-cream">
          {ev > 0 ? `+${ev.toFixed(1)}` : ev.toFixed(1)} EV
        </div>
      </Photo>
      <label className="mt-4 flex flex-col gap-2">
        <span className="text-kicker text-muted">Drag to match a face — or a sky</span>
        <input
          type="range"
          min={-1}
          max={1}
          step={0.1}
          value={ev}
          onChange={(e) => setEv(Number(e.target.value))}
          className="ev-slider"
        />
        <span className="flex justify-between text-caption text-muted">
          <span>Darker</span>
          <span>Brighter</span>
        </span>
      </label>
    </div>
  );
}

export function EditPlay({ src, alt }: { src: string; alt: string }) {
  const [amount, setAmount] = useState(0.55);

  return (
    <div>
      <div className="relative max-h-80 overflow-hidden bg-soft shadow-photo aspect-photo">
        <img
          src={src}
          alt={alt}
          className="size-full object-cover outline outline-1 -outline-offset-1 outline-ink/10"
          draggable={false}
        />
        <img
          src={src}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 size-full object-cover"
          style={{
            clipPath: `inset(0 0 0 ${amount * 100}%)`,
            filter: "contrast(1.14) saturate(1.1) sepia(0.12) brightness(1.04)",
          }}
          draggable={false}
        />
        <div
          className="absolute inset-y-0 w-0.5 bg-cream"
          style={{ left: `${amount * 100}%` }}
          aria-hidden="true"
        />
        <span className="absolute top-3 left-3 rounded-full bg-ink/70 px-2.5 py-1 text-micro font-medium uppercase tracking-wider text-cream">
          Straight
        </span>
        <span className="absolute top-3 right-3 rounded-full bg-ink/70 px-2.5 py-1 text-micro font-medium uppercase tracking-wider text-cream">
          A little edit
        </span>
      </div>
      <label className="mt-4 flex flex-col gap-2">
        <span className="text-kicker text-muted">Pull to compare. Stop before it shouts.</span>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="ev-slider"
        />
      </label>
    </div>
  );
}

export function CloserPair({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="grid grid-cols-2 gap-2">
      <figure>
        <div className="flex aspect-photo items-center justify-center bg-soft p-7 shadow-photo">
          <img
            src={src}
            alt=""
            className="w-5/12 outline outline-1 -outline-offset-1 outline-ink/10"
            draggable={false}
          />
        </div>
        <figcaption className="mt-2 text-caption text-muted">Too far</figcaption>
      </figure>
      <figure>
        <div className="aspect-photo overflow-hidden bg-soft shadow-photo">
          <img
            src={src}
            alt={alt}
            className="size-full object-cover outline outline-1 -outline-offset-1 outline-ink/10"
            draggable={false}
          />
        </div>
        <figcaption className="mt-2 text-caption text-muted">Fill the frame</figcaption>
      </figure>
    </div>
  );
}

export function CompareToggle({
  left,
  right,
}: {
  left: { image: string; alt: string; label: string; caption: string };
  right: { image: string; alt: string; label: string; caption: string };
}) {
  const [side, setSide] = useState<"left" | "right">("left");
  const current = side === "left" ? left : right;

  return (
    <div>
      <div className="relative">
        <Photo src={current.image} alt={current.alt} />
        <div
          className="absolute inset-x-2 bottom-2 z-10 grid grid-cols-2 gap-1 rounded-full bg-ink/70 p-1"
          role="tablist"
          aria-label="Compare lighting"
        >
          {(["left", "right"] as const).map((key) => {
            const item = key === "left" ? left : right;
            const active = side === key;
            return (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setSide(key)}
                className={cn(
                  "h-10 rounded-full text-sm font-medium transition-colors duration-150",
                  active ? "bg-cream text-ink" : "text-cream/80",
                )}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
      <p className="mt-2 text-caption text-muted text-pretty">{current.caption}</p>
    </div>
  );
}
