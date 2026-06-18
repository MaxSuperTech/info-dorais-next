import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex items-center border-l-2 border-primary bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-primary",
        className,
      )}
      {...props}
    />
  );
}
