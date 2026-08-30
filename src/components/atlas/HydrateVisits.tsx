import { useEffect } from "react";
import { useVisitStore } from "@/lib/visit-store";

export function HydrateVisits() {
  useEffect(() => {
    const result = useVisitStore.persist.rehydrate();
    void Promise.resolve(result).then(() => {
      useVisitStore.getState().setHydrated(true);
    });
  }, []);
  return null;
}
