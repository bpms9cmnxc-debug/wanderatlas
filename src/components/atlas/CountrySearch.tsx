import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { COUNTRIES, type Country } from "@/lib/countries";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type Props = {
  onPick: (country: Country) => void;
  className?: string;
};

export function CountrySearch({ onPick, className }: Props) {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (needle.length < 1) return [];
    return COUNTRIES.filter((c) => c.kind !== "x")
      .filter((c) => {
        return (
          c.name.toLowerCase().includes(needle) ||
          c.nameEn.toLowerCase().includes(needle) ||
          c.capital.toLowerCase().includes(needle) ||
          c.iso2.toLowerCase() === needle ||
          c.iso3.toLowerCase() === needle
        );
      })
      .slice(0, 8);
  }, [q]);

  return (
    <div className={cn("relative", className)}>
      <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-subtle" />
      <Input
        value={q}
        placeholder="Land suchen…"
        className="h-10 bg-surface/90 pl-9"
        onChange={(e) => {
          setQ(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => {
          window.setTimeout(() => setOpen(false), 140);
        }}
        aria-label="Land suchen"
      />
      {open && results.length > 0 && (
        <ul className="absolute top-[calc(100%+6px)] right-0 left-0 z-40 overflow-hidden rounded-xl bg-surface py-1 shadow-[var(--shadow-float)]">
          {results.map((c) => (
            <li key={c.iso2}>
              <button
                className="flex w-full items-baseline justify-between gap-3 px-3 py-2 text-left text-sm hover:bg-surface-2"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => {
                  onPick(c);
                  setQ("");
                  setOpen(false);
                }}
              >
                <span className="text-fg">{c.name}</span>
                <span className="text-xs text-subtle">{c.iso2}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
