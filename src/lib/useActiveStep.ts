import { useEffect, useRef, useState } from "react";

/**
 * Tracks which of N step elements is currently most centered in the viewport.
 * Used to drive a sticky visual panel without hijacking native scroll.
 */
export function useActiveStep(count: number) {
  const stepRefs = useRef<(HTMLElement | null)[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const ratios = new Map<number, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const index = Number((entry.target as HTMLElement).dataset.stepIndex);
          ratios.set(index, entry.isIntersecting ? entry.intersectionRatio : 0);
        }
        let bestIndex = active;
        let bestRatio = -1;
        ratios.forEach((ratio, index) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestIndex = index;
          }
        });
        if (bestRatio > 0) setActive(bestIndex);
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: "-35% 0px -35% 0px" }
    );

    stepRefs.current.forEach((node) => node && observer.observe(node));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  function setStepRef(index: number) {
    return (node: HTMLElement | null) => {
      stepRefs.current[index] = node;
    };
  }

  return { active, setStepRef };
}
