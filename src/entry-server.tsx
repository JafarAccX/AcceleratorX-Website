import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { CourseProvider } from "./context/courseContext";
import { UserProvider } from "./context/UserContext";
import { ThemeProvider } from "./context/ThemeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppRoutes } from "./components/AppRoutes";

export function render(url: string, context: Record<string, unknown> = {}) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        retry: false,
      },
    },
  });

  const helmetContext = {};

  const html = renderToString(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <HelmetProvider context={helmetContext}>
            <CourseProvider>
              <UserProvider>
                <StaticRouter location={url}>
                  <AppRoutes />
                </StaticRouter>
              </UserProvider>
            </CourseProvider>
          </HelmetProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </StrictMode>
  );

  return { html, context: { ...context, helmet: helmetContext } };
}
