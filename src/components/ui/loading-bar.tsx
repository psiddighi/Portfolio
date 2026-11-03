"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface LoadingBarProps extends React.HTMLAttributes<HTMLDivElement> {
  isLoading?: boolean;
}

const LoadingBar = React.forwardRef<HTMLDivElement, LoadingBarProps>(
  ({ className, isLoading = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "route-loading-bar",
          isLoading ? "route-loading-bar--active" : "route-loading-bar--idle",
          className
        )}
        {...props}
      />
    );
  }
);

LoadingBar.displayName = "LoadingBar";

export { LoadingBar };
