// import React from "react";
import { createBrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense, lazy } from "react";
import Error from "./components/Error";
import Spinners from "./components/Spinners";

const Home = lazy(() => import("./components/Home"));
const MoviesDetail = lazy(() => import("./components/MoviesDetail"));
const Movies = lazy(() => import("./components/Movies"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <ErrorBoundary fallback={<Error />}>
            <Suspense fallback={<Spinners />}>
              <Home />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "movies",
        element: (
          <ErrorBoundary fallback={<Error />}>
            <Suspense fallback={<Spinners />}>
              <Movies />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "movies/:id",
        element: (
          <ErrorBoundary fallback={<Error />}>
            <Suspense fallback={<Spinners />}>
              <MoviesDetail />
            </Suspense>
          </ErrorBoundary>
        ),
      },
    ],
  },
]);

export default router;
