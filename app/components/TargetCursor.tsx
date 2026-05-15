"use client";

import { useEffect, useRef } from "react";

type Point = {
  x: number;
  y: number;
};

type TargetCursorProps = {
  targetSelector?: string;
  hideDefaultCursor?: boolean;
  spinDuration?: number;
};

const defaultCorners: Point[] = [
  { x: -18, y: -18 },
  { x: 6, y: -18 },
  { x: 6, y: 6 },
  { x: -18, y: 6 },
];

export default function TargetCursor({
  targetSelector = "a, summary, .cursor-target",
  hideDefaultCursor = true,
  spinDuration = 2,
}: TargetCursorProps) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const cornersRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const hasTouch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const isSmallScreen = window.innerWidth <= 768;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (hasTouch || isSmallScreen || prefersReducedMotion || !cursorRef.current) {
      return;
    }

    const cursor = cursorRef.current;
    const corners = cornersRef.current;
    const position = {
      currentX: window.innerWidth / 2,
      currentY: window.innerHeight / 2,
      targetX: window.innerWidth / 2,
      targetY: window.innerHeight / 2,
      rotation: 0,
      pressed: false,
      visible: false,
    };

    const cornerPositions = defaultCorners.map((corner) => ({ ...corner }));
    let activeTarget: Element | null = null;
    let raf = 0;
    let lastTime = performance.now();

    if (hideDefaultCursor) {
      document.documentElement.classList.add("target-cursor-enabled");
    }

    const getTarget = (element: Element | null) =>
      element?.closest(targetSelector) ?? null;

    const getActiveCorners = (target: Element): Point[] => {
      const rect = target.getBoundingClientRect();
      const border = 4;
      const cornerSize = 12;

      return [
        {
          x: rect.left - border - position.currentX,
          y: rect.top - border - position.currentY,
        },
        {
          x: rect.right + border - cornerSize - position.currentX,
          y: rect.top - border - position.currentY,
        },
        {
          x: rect.right + border - cornerSize - position.currentX,
          y: rect.bottom + border - cornerSize - position.currentY,
        },
        {
          x: rect.left - border - position.currentX,
          y: rect.bottom + border - cornerSize - position.currentY,
        },
      ];
    };

    const tick = (time: number) => {
      const delta = Math.min(time - lastTime, 32);
      lastTime = time;

      position.currentX += (position.targetX - position.currentX) * 0.22;
      position.currentY += (position.targetY - position.currentY) * 0.22;

      if (!activeTarget) {
        position.rotation += (360 / (spinDuration * 1000)) * delta;
      } else {
        position.rotation += (0 - position.rotation) * 0.18;
      }

      cursor.style.opacity = position.visible ? "1" : "0";
      cursor.style.transform = `translate3d(${position.currentX}px, ${position.currentY}px, 0) rotate(${position.rotation}deg) scale(${position.pressed ? 0.92 : 1})`;

      const desiredCorners = activeTarget
        ? getActiveCorners(activeTarget)
        : defaultCorners;

      corners.forEach((corner, index) => {
        const current = cornerPositions[index];
        const desired = desiredCorners[index];

        current.x += (desired.x - current.x) * 0.24;
        current.y += (desired.y - current.y) * 0.24;
        corner.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
      });

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(-50%, -50%) scale(${position.pressed ? 0.7 : 1})`;
      }

      raf = requestAnimationFrame(tick);
    };

    const updateTargetFromPoint = () => {
      const element = document.elementFromPoint(
        position.targetX,
        position.targetY
      );
      activeTarget = getTarget(element);
    };

    const handleMouseMove = (event: MouseEvent) => {
      position.targetX = event.clientX;
      position.targetY = event.clientY;
      position.visible = true;
      activeTarget = getTarget(event.target as Element);
    };

    const handleMouseDown = () => {
      position.pressed = true;
    };

    const handleMouseUp = () => {
      position.pressed = false;
    };

    const handleMouseLeave = () => {
      position.visible = false;
      activeTarget = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("scroll", updateTargetFromPoint, { passive: true });
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("scroll", updateTargetFromPoint);
      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
      document.documentElement.classList.remove("target-cursor-enabled");
    };
  }, [hideDefaultCursor, spinDuration, targetSelector]);

  return (
    <div ref={cursorRef} className="target-cursor-wrapper" aria-hidden="true">
      <div ref={dotRef} className="target-cursor-dot" />
      {defaultCorners.map((_, index) => (
        <div
          key={index}
          ref={(element) => {
            if (element) {
              cornersRef.current[index] = element;
            }
          }}
          className={`target-cursor-corner target-cursor-corner-${index + 1}`}
        />
      ))}
    </div>
  );
}
