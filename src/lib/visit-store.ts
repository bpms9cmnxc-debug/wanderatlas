import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type Visit = {
  iso2: string;
  since: string;
  note: string;
};

type VisitState = {
  visits: Record<string, Visit>;
  hydrated: boolean;
  setHydrated: (v: boolean) => void;
  toggleVisit: (iso2: string) => void;
  setNote: (iso2: string, note: string) => void;
  setSince: (iso2: string, since: string) => void;
  markMany: (iso2s: string[]) => void;
  clearAll: () => void;
};

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

export const useVisitStore = create<VisitState>()(
  persist(
    (set) => ({
      visits: {},
      hydrated: false,
      setHydrated: (v) => set({ hydrated: v }),
      toggleVisit: (iso2) =>
        set((s) => {
          const next = { ...s.visits };
          if (next[iso2]) {
            delete next[iso2];
          } else {
            next[iso2] = { iso2, since: todayIso(), note: "" };
          }
          return { visits: next };
        }),
      setNote: (iso2, note) =>
        set((s) => {
          const cur = s.visits[iso2];
          if (!cur) return s;
          return { visits: { ...s.visits, [iso2]: { ...cur, note } } };
        }),
      setSince: (iso2, since) =>
        set((s) => {
          const cur = s.visits[iso2];
          if (!cur) return s;
          return { visits: { ...s.visits, [iso2]: { ...cur, since } } };
        }),
      markMany: (iso2s) =>
        set((s) => {
          const next = { ...s.visits };
          const since = todayIso();
          for (const iso2 of iso2s) {
            if (!next[iso2]) next[iso2] = { iso2, since, note: "" };
          }
          return { visits: next };
        }),
      clearAll: () => set({ visits: {} }),
    }),
    {
      name: "wanderatlas-visits-v1",
      storage: createJSONStorage(() => localStorage),
      partialize: (s) => ({ visits: s.visits }),
      skipHydration: true,
    },
  ),
);
