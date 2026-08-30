import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-10 w-full rounded-lg bg-surface-2 px-3 text-sm text-fg shadow-[var(--shadow-border)]",
        "placeholder:text-subtle outline-none transition-[box-shadow] duration-(--motion-quick)",
        "focus-visible:ring-2 focus-visible:ring-accent/40",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
