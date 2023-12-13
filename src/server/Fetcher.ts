/**
 * ! Fetcher.ts file
 *  ? Data Fetching 관련한 API Function들을 정의하는 file.
 */

import { ApiConfig, movieApiConfig } from '../api/ApiConfig'
import { IMoviesCardData } from '../interface/IMovies.ts'

/**
 * Movies 정보 반환
 */
export const getMoviesData = async () => {
    const response = await ApiConfig.get(
        // `movie/popular?language=en-US&page=1`
        // `trending/movie/week?language=ko&page=1`
        `popular`,
    ).then((res: any) => res.data)
    return response
}

export const getTopRatedMoviesData = async () => {
    const response = await ApiConfig.get(
        // `movie/top_rated?language=en-US&page=1`
        `rated`,
    ).then((res: any) => res.data)
    return response
}

export const getUpcomingMoviesData = async () => {
    const response = await ApiConfig.get(
        // `movie/upcoming?language=en-US&page=1`
        `upcoming`,
    ).then((res: any) => res.data)
    return response
}

export const getGenreMoviesData = async () => {
    const response = await ApiConfig.get(
        // `genre/movie/list?language=ko&page=1`
        `genre`,
    ).then((res: any) => res.data)
    return response
}

export const deleteMoviesData = async (
    moviesType: string,
    moviesId: number,
) => {
    const response = await ApiConfig.delete(moviesType + '/' + moviesId).then(
        (res: any) => res.data,
    )
    return {...response, _type: moviesType}
}

export const updateMoviesData = async (
    moviesType: string,
    moviesId: number,
    moviesTitle: string,
) => {
    const response = await ApiConfig.patch(moviesType + '/' + moviesId, {
        'title': moviesTitle,
    }).then(
        (res: any) => res.data,
    )
    return {...response, _type: moviesType}
}

export const createMoviesData = async (
    moviesType: string,
    reqData: IMoviesCardData,
) => {
    const response = await ApiConfig.post('/favorite', {
        'movies_type': moviesType,
        'id': reqData.id,
        'poster_path': reqData.poster_path,
        'title': reqData.title,
        'genre_ids': reqData.genre_ids,
        'vote_average': reqData.vote_average,
        'overview': reqData.overview,
        'adult': reqData.adult,
    }).then(
        (res: any) => res.data,
    )

    return {...response, _type: moviesType}
}

export const getFavoriteData = async () => {
    const response = await ApiConfig.get(
        // `movie/popular?language=en-US&page=1`
        // `trending/movie/week?language=ko&page=1`
        `favorite`,
    ).then((res: any) => res.data)
    return response
}

export const getMovieDetailData = async (id: number) => {
    const response = await movieApiConfig.get(
        `movie/${id}?language=ko`
    ).then((res: any) => res.data)
    return response
}

// ! exmaple..
// export const deleteMoviesData = async (moviesId: number) => {
//   const response = await ApiConfig.delete(`popular`, {
//     data: {
//       id: moviesId,
//     },
//   }).then((res: any) => res.data);
//   return response;
// };
