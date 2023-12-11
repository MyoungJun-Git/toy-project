// import React from "react";
import { createBrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from './components/Layout/Layout.tsx'
import { ErrorBoundary } from 'react-error-boundary'
import { Suspense, lazy } from 'react'
import Error from './components/Error/Error.tsx'
import Spinners from './components/Spinners/Spinners.tsx'

const Home = lazy(() => import('./components/Layout/Home.tsx'))
const MoviesDetail = lazy(() => import('./components/MoviesDetail'))
const MoviesFavorite = lazy(() => import("./components/Movies/MoviesFavorite/MoviesFavorite"));

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: (
                    <ErrorBoundary fallback={<Error />}>
                        <Suspense fallback={<Spinners />}>
                            <Home />
                        </Suspense>
                    </ErrorBoundary>
                ),
            },
            {
              path: "movies/favorite",
              element: (
                <ErrorBoundary fallback={<Error />}>
                  <Suspense fallback={<Spinners />}>
                    <MoviesFavorite />
                  </Suspense>
                </ErrorBoundary>
              ),
            },
            {
                path: 'movies/:id',
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
])

export default router
