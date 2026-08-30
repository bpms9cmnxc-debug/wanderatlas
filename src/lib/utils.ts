import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDe(n: number, opts?: Intl.NumberFormatOptions) {
  return new Intl.NumberFormat("de-DE", opts).format(n);
}

export function formatCompact(n: number) {
  return new Intl.NumberFormat("de-DE", {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 1,
  }).format(n);
}

export function formatPercent(n: number, digits = 1) {
  return new Intl.NumberFormat("de-DE", {
    style: "percent",
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(n);
}
