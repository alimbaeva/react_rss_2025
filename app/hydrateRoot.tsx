import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
// import routes from "./routes";

// let router = createBrowserRouter(routes, {
//   hydrationData: window.__staticRouterHydrationData,
// });

hydrateRoot(
  document,
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
  </StrictMode>
);
