// import React from "react";
import { createBrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ErrorBoundary } from 'react-error-boundary'
import { Suspense, lazy } from 'react'

import Layout from './pattern/vac/components/Layout/Layout.tsx'
import Error from './pattern/vac/components/Error/Error.tsx'
import Spinners from './pattern/atomic/atoms/Spinners.tsx'
import HomePage from './pattern/atomic/pages/HomePage.tsx'
import FavoritePage from './pattern/atomic/pages/FavoritePage.tsx'
import MoviesDetailPage from './pattern/atomic/pages/MoviesDetailPage.tsx'
import InfiniteScrollPage from './pattern/atomic/pages/InfiniteScrollPage.tsx'
// import Spinners from './pattern/vac/components/Spinners/Spinners.tsx'

const Home = lazy(() => import('./pattern/vac/components/Layout/Home.tsx'))
const MoviesFavorite = lazy(() => import('./pattern/vac/components/Movies/MoviesFavorite/MoviesFavorite'))

const spinnersProps = {
    animation: 'border',
    variant: 'info',
    parentStyle: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    childStyle: {
        width: '10rem',
        height: '10rem',
    },
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: (
                    <ErrorBoundary fallback={<Error />}>
                        <Suspense fallback={<Spinners {...spinnersProps} />}>
                            <Home />
                        </Suspense>
                    </ErrorBoundary>
                ),
            },
            {
                path: 'movies/favorite',
                element: (
                    <ErrorBoundary fallback={<Error />}>
                        <Suspense fallback={<Spinners {...spinnersProps} />}>
                            <MoviesFavorite />
                        </Suspense>
                    </ErrorBoundary>
                ),
            }, {
                path: '/home/atomic',
                element: (
                    <ErrorBoundary fallback={<Error />}>
                        <Suspense fallback={<Spinners {...spinnersProps} />}>
                            <HomePage />
                        </Suspense>
                    </ErrorBoundary>
                ),
            },
            {
                path: 'movies/favorite/atomic',
                element: (
                    <ErrorBoundary fallback={<Error />}>
                        <Suspense fallback={<Spinners {...spinnersProps} />}>
                            <FavoritePage />
                        </Suspense>
                    </ErrorBoundary>
                ),
            },
            {
                path: 'movies/detail/:id',
                element: (
                    <ErrorBoundary fallback={<Error />}>
                        <Suspense fallback={<Spinners {...spinnersProps} />}>
                            <MoviesDetailPage />
                        </Suspense>
                    </ErrorBoundary>
                ),
            },
            {
                path: 'movies/infinite',
                element: (
                    <ErrorBoundary fallback={<Error />}>
                        <Suspense fallback={<Spinners {...spinnersProps} />}>
                            <InfiniteScrollPage />
                        </Suspense>
                    </ErrorBoundary>
                ),
            },
        ],
    },
])

export default router
