// import { IMoviesCardData } from '../../../interface/IMovies.ts'
// import MoviesSlideView from '../MoviesSlide/MoviesSlideView.tsx'
// import Carousel from 'react-multi-carousel'

// import Carousel from 'react-multi-carousel'
// import MoviesSlideView from '../MoviesSlide/MoviesSlideView.tsx'

import Banner from '../../Banner/Banner.tsx'
import MoviesSlide from '../../MoviesSlide/MoviesSlide.tsx'
import { useSuspenseQueries } from '@tanstack/react-query'
import {
    getFavoriteData, getGenreMoviesData,
} from '../../../../../server/Fetcher.ts'

const MoviesFavorite = () => {
    /**
     * todo : 내가 필요한 것 (여기서부터 시작하기...)
     *  1. favoriteData // genre Data 두가지 가져오기...
     */

    const results = useSuspenseQueries({
        queries: [
            {
                queryKey: ["favorite"],
                queryFn: getFavoriteData,
            },
            {
                queryKey: ["genre"],
                queryFn: getGenreMoviesData,
            },
        ],
    });

    return (
        <div className="movies_favorite">
            <Banner movieData={results[0].data}/>
            <h1 className="home">Favorite Movies</h1>
            <MoviesSlide
                type="favorite"
                movieData={results[0].data}
                movieGenreData={results[1].data}
            />
        </div>
    )
}

export default MoviesFavorite
