import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root")!;

if (container.innerHTML) {
  // SSR mode: hydrate the server-rendered content
  hydrateRoot(
    container,
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  // Client-only mode: render normally
  createRoot(container).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
