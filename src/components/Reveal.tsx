import type { ElementType, ReactNode } from "react";
import { useReveal } from "../lib/useReveal";

export function Reveal({
  children,
  as: Tag = "div",
  className = "",
  scale = false,
  delay = 0,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  scale?: boolean;
  delay?: number;
}) {
  const { ref, visible } = useReveal<HTMLElement>();
  const base = scale ? "reveal-scale" : "reveal";

  return (
    <Tag
      ref={ref}
      className={`${base} ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
