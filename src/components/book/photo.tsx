import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

type PhotoProps = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  imgClassName?: string;
  imgStyle?: CSSProperties;
  aspect?: "photo" | "wide" | "auto" | "compact";
  children?: React.ReactNode;
};

export function Photo({
  src,
  alt,
  caption,
  className,
  imgClassName,
  imgStyle,
  aspect = "photo",
  children,
}: PhotoProps) {
  const aspectClass =
    aspect === "wide"
      ? "aspect-wide"
      : aspect === "compact"
        ? "h-36"
        : aspect === "auto"
          ? ""
          : "aspect-photo";

  return (
    <figure className={cn("min-w-0", className)}>
      <div
        className={cn(
          "relative max-h-80 overflow-hidden bg-soft shadow-photo",
          aspectClass,
        )}
      >
        <img
          src={src}
          alt={alt}
          className={cn(
            "size-full object-cover outline outline-1 -outline-offset-1 outline-ink/10",
            imgClassName,
          )}
          style={imgStyle}
          draggable={false}
        />
        {children}
      </div>
      {caption ? (
        <figcaption className="mt-2 text-caption text-muted text-pretty">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
