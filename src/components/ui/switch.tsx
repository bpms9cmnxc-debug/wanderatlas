import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full",
        "shadow-[var(--shadow-border)] transition-colors duration-(--motion-quick) ease-(--ease-out)",
        "data-[state=checked]:bg-accent data-[state=unchecked]:bg-surface-2",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40",
        "disabled:cursor-not-allowed disabled:opacity-40",
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block size-5 rounded-full bg-fg shadow-sm",
          "transition-transform duration-(--motion-quick) ease-(--ease-out)",
          "data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0.5",
          "data-[state=checked]:bg-accent-fg",
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
