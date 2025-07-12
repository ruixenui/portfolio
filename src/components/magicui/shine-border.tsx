"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ShineBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Width of the border in pixels
   * @default 1
   */
  borderWidth?: number;
  /**
   * Duration of the animation in seconds
   * @default 14
   */
  duration?: number;
  /**
   * Color of the border, can be a single color or an array of colors
   * @default "#000000"
   */
  shineColor?: string | string[];
}

/**
 * Shine Border
 *
 * An animated background border effect component with configurable properties.
 */
export function ShineBorder({
  borderWidth = 1,
  duration = 14,
  shineColor = "#000000",
  className,
  style,
  ...props
}: ShineBorderProps) {
  const gradientColors = Array.isArray(shineColor)
    ? shineColor.join(", ")
    : shineColor;

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit]",
        className,
      )}
      style={
        {
          "--border-width": `${borderWidth}px`,
          "--shine-duration": `${duration}s`,
          ...style,
        } as React.CSSProperties
      }
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden rounded-[inherit]">
        <div
          className="absolute inset-[-1px] rounded-[inherit]"
          style={{
            background: Array.isArray(shineColor)
              ? `linear-gradient(45deg, ${gradientColors})`
              : shineColor,
          }}
        />
        <div
          className="absolute inset-0 animate-[shine_var(--shine-duration)_linear_infinite] rounded-[inherit]"
          style={{
            background: Array.isArray(shineColor)
              ? `conic-gradient(from 0deg, transparent 0 210deg, ${gradientColors}, transparent 330deg 360deg)`
              : `conic-gradient(from 0deg, transparent 0 210deg, ${shineColor}, transparent 330deg 360deg)`,
            transform: "rotate(-45deg)",
          }}
        />
      </div>
    </div>
  );
}
