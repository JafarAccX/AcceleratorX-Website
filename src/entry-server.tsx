import { StrictMode } from "react";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { CourseProvider } from "./context/courseContext";
import { UserProvider } from "./context/UserContext";
import { ThemeProvider } from "./context/ThemeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppRoutes } from "./components/layout/AppRoutes";
import ScrollToTop from "./components/layout/ScrollToTop";
import { MetaPixel } from "./components/seo/MetaPixel";
import Loader from "./components/ui/Loader";
import { MetaTrackingDebugger } from "./components/seo/MetaTrackingDebugger";
import { Suspense } from "react";
import { Writable } from "node:stream";

export function render(url: string, context: Record<string, unknown> = {}) {
  return new Promise((resolve, reject) => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: Infinity,
          retry: false,
        },
      },
    });

    const helmetContext = {};

    const { pipe } = renderToPipeableStream(
      <StrictMode>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider>
            <HelmetProvider context={helmetContext}>
              <CourseProvider>
                <UserProvider>
                  <Suspense fallback={<Loader />}>
                    <StaticRouter location={url}>
                      <ScrollToTop />
                      <MetaPixel />
                      {/* Toaster is client-only — not rendered during SSR */}
                      <AppRoutes />
                    </StaticRouter>
                  </Suspense>
                  <MetaTrackingDebugger />
                </UserProvider>
              </CourseProvider>
            </HelmetProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </StrictMode>,
      {
        onAllReady() {
          let html = "";
          const writable = new Writable({
            write(chunk, encoding, callback) {
              html += chunk.toString();
              callback();
            }
          });

          writable.on("finish", () => {
            resolve({ html, context: { ...context, helmet: helmetContext } });
          });

          pipe(writable);
        },
        onError(error) {
          console.error(error);
          reject(error);
        }
      }
    );
  });
}
