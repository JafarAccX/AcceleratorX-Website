import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root")!;

// Check if there are any child ELEMENTS (ignoring comments like ssr-outlet and text nodes)
const hasSSRContent = container.hasChildNodes() && container.children.length > 0;

if (hasSSRContent) {
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
