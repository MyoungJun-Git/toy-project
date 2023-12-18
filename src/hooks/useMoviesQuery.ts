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
            `favorite`
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
            }
        ).then((res: any) => res.data)
    }
}

/**
 * todo : custom hooks > react query fetching
 */
const useMoviesQuery = () => {
    const client = useQueryClient();
    // ? 영화 (popular, rated, upcoming) data 가져오기..
    const { data: moviesData,  } = useSuspenseQueries({
        queries: [
            {
                queryKey: [queryKeys.popular],
                queryFn: axiosFn.getPopularData,
                staleTime: (60 * 3 * 1000) // default: 0
            },
            {
                queryKey: [queryKeys.rated],
                queryFn: axiosFn.getRatedData,
                staleTime: (60 * 3 * 1000) // default: 0
            },
            {
                queryKey: [queryKeys.upcoming],
                queryFn: axiosFn.getUpcomingData,
                staleTime: (60 * 3 * 1000) // default: 0
            }
        ],
        combine: (results) => {
            return {
                data: results.map((result) => result.data),
                pending: results.some((result) => result.isPending),
            }
        }
    });

    // ? 영화 장르 데이터
    const { data: moviesGenreData } = useSuspenseQuery({
        queryKey: [queryKeys.genre],
        queryFn: axiosFn.getGenreData,
        staleTime: (60 * 3 * 1000),
    });

    // ? 영화 관심 데이터
    const { data: moviesFavoriteData } = useSuspenseQuery({
        queryKey: [queryKeys.favorite],
        queryFn: axiosFn.getFavoriteData,
        staleTime: (60 * 3 * 1000),
    });

    // ? 영화 디테일 데이터
    const useMoviesDetailData = (id: number) => {
        return useSuspenseQuery({
            queryKey: [queryKeys.movies_detail, id],
            queryFn: () => axiosFn.getMovieDetailData(id),
            staleTime: (60 * 3 * 1000), // ? 해당 캐싱되어있는 데이터를 언제까지 최신이라고 판단 할 것 인지? (default: 0) 계속 새롭게 refetching
            gcTime: (60 * 1000), // ? 만약에 캐싱되어있는 데이터를 사용하지 않을 경우, 정해진 시간 이후 캐시가 gc로 인해 삭제 됨. (default: 5분)
        })
    };

    // ? 영화 관심 추가
    const { mutate: addMoviesFavoriteMutate } = useMutation({
        mutationFn: (data: IMoviesCardData) => {
            return axiosFn.addMoviesFavorite(data);
        },
        onSuccess: () => {
            alert('관심 추가 완료!');
            client.invalidateQueries({
                queryKey: [queryKeys.favorite],
            });
        },
        onError: error => alert(error.message)
    });

    // todo : update || delete 개발

    return { moviesData, moviesGenreData, moviesFavoriteData, useMoviesDetailData, addMoviesFavoriteMutate }
}

export { useMoviesQuery }