import { ApiConfig, movieApiConfig } from '../api/ApiConfig'
import { useMutation, useQueryClient, useSuspenseQueries, useSuspenseQuery } from '@tanstack/react-query'
import { queryKeys } from '../api/QueryKeys.ts'
import { IMoviesCardData } from '../interface/IMovies.ts'

/**
 * todo : axios 정의
 */
const axiosFn = {
    getPopularData: async () => {
        return await ApiConfig.get(
            `popular`,
        ).then((res: any) => res.data)
    },
    getRatedData: async () => {
        return await ApiConfig.get(
            `rated`,
        ).then((res: any) => res.data)
    },
    getUpcomingData: async () => {
        return await ApiConfig.get(
            `upcoming`,
        ).then((res: any) => res.data)
    },
    getGenreData: async () => {
        return await ApiConfig.get(
            `genre`,
        ).then((res: any) => res.data)
    },
    getFavoriteData: async () => {
        return await ApiConfig.get(
            `favorite`,
        ).then((res: any) => res.data)
    },
    getMovieDetailData: async (id: number) => {
        return await movieApiConfig.get(
            `movie/${id}?language=ko`,
        ).then((res: any) => res.data)
    },
    addMoviesFavorite: async (data: IMoviesCardData) => {
        return await ApiConfig.post(
            `/${queryKeys.favorite}`,
            {
                'movies_type': data.type,
                'id': data.id,
                'poster_path': data.poster_path,
                'title': data.title,
                'genre_ids': data.genre_ids,
                'vote_average': data.vote_average,
                'overview': data.overview,
                'adult': data.adult,
            },
        ).then((res: any) => res.data)
    },
    deleteMoviesData: async (data: {
        type: string,
        id: number,
    }) => {
        const resDeleteMoviesData = await ApiConfig.delete(
            `${data.type}/${data.id}`,
        ).then((res: any) => res.data)

        return { ...resDeleteMoviesData, type: data.type }
    },
}

/**
 * todo : custom hooks > react query fetching
 *
 * // ? 아래 3개의 항목은 (동일) queryKey 값으로 판단 됨.
 *  * useQuery(['todos', { status, page }], ...)
 *  * useQuery(['todos', { page, status }], ...)
 *  * useQuery(['todos', { page, status, other: undefined }], ...)
 *
 * // ? 아래 3개의 항목은 (다른) queryKey 값으로 판단 됨.
 *  * useQuery(['todos', status, page], ...)
 *  * useQuery(['todos', page, status], ...)
 *  * useQuery(['todos', undefined, page, status], ...)
 */

const useMoviesQuery = () => {
    const client = useQueryClient()
    // ? 영화 (popular, rated, upcoming) data 가져오기..
    const { data: moviesData } = useSuspenseQueries({
        queries: [
            {
                queryKey: [queryKeys.popular],
                queryFn: axiosFn.getPopularData,
            },
            {
                queryKey: [queryKeys.rated],
                queryFn: axiosFn.getRatedData,
            },
            {
                queryKey: [queryKeys.upcoming],
                queryFn: axiosFn.getUpcomingData,
            },
        ],
        combine: (results) => {
            return {
                data: results.map((result) => result.data),
                pending: results.some((result) => result.isPending),
            }
        },
    })

    // ? 영화 장르 데이터
    const { data: moviesGenreData } = useSuspenseQuery({
        queryKey: [queryKeys.genre],
        queryFn: axiosFn.getGenreData,
    })

    // ? 영화 관심 데이터
    const { data: moviesFavoriteData } = useSuspenseQuery({
        queryKey: [queryKeys.favorite],
        queryFn: axiosFn.getFavoriteData,
    })

    // ? 영화 디테일 데이터
    const useMoviesDetailData = (id: number) => {
        return useSuspenseQuery({
            queryKey: [queryKeys.movies_detail, id],
            queryFn: () => axiosFn.getMovieDetailData(id),
        })
    }

    // ? 영화 관심 추가
    const { mutate: addMoviesFavoriteMutate } = useMutation({
        mutationFn: (data: IMoviesCardData) => {
            return axiosFn.addMoviesFavorite(data)
        },
        onSuccess: () => {
            alert('관심 추가 완료!')
            client.invalidateQueries({
                queryKey: [queryKeys.favorite],
            })
        },
        // onError: error => alert(error.message)
    })

    // todo : delete 개발
    const { mutate: deleteMoviesMutate } = useMutation({
        mutationFn: (data: {
            id: number,
            type: string,
        }) => {
            return axiosFn.deleteMoviesData(data)
        },
        onSuccess: (data: {
            type: string
        }) => {
            alert(`${data.type} 삭제 완료! `)
            client.invalidateQueries({
                queryKey: [data.type],
            })
        },
    })

    return {
        moviesData,
        moviesGenreData,
        moviesFavoriteData,
        useMoviesDetailData,
        addMoviesFavoriteMutate,
        deleteMoviesMutate,
    }
}

export { useMoviesQuery }