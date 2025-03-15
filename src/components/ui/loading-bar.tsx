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
          "fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-green-900 via-green-800 to-green-900 transition-transform duration-300 ease-in-out",
          isLoading ? "translate-x-0" : "-translate-x-full",
          className
        )}
        {...props}
      />
    );
  }
);

LoadingBar.displayName = "LoadingBar";

export { LoadingBar };