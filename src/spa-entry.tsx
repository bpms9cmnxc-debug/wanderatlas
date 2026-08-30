import { createRoot } from "react-dom/client";
import { AtlasApp } from "@/components/atlas/AtlasApp";
import { HydrateVisits } from "@/components/atlas/HydrateVisits";

const el = document.getElementById("root");
if (!el) throw new Error("root missing");
createRoot(el).render(
  <>
    <HydrateVisits />
    <AtlasApp />
  </>,
);
