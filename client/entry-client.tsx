import { hydrateApp } from "@taujs/react";

import { App } from "./App";

hydrateApp({
  appComponent: (
    <App location={window.location.pathname + window.location.search} />
  ),
  // rootElementId: "root",
  enableDebug: import.meta.env.DEV,
  onSuccess: () => console.log("✓ App hydrated successfully"),
});
