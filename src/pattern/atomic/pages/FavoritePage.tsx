import FavoriteTemplates from '../templates/FavoriteTemplates.tsx'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import {
    deleteMoviesData, updateMoviesData,
} from '../../../server/Fetcher.ts'
import { useMoviesQuery } from '../../../hooks/useMoviesQuery.ts'

const FavoritePage = () => {
    const queryClient = useQueryClient();
    const { moviesFavoriteData, moviesGenreData, addMoviesFavoriteMutate } = useMoviesQuery();

    // const { mutate: createMutate } = useMutation({
    //     mutationFn: (data: any) => {
    //         return createMoviesData(data.type, data)
    //     },
    //     onSuccess: (data) => {
    //         alert('관심 추가 완료')
    //         queryClient.invalidateQueries({
    //             queryKey: [data._type],
    //         })
    //     },
    //     onError: (data) => {
    //         alert(data.message)
    //     },
    // });

    const { mutate: updateMutate } = useMutation({
        mutationFn: (data: {
            type: string,
            id: number,
            title: {
                value: string
            },
        }) => {
            return updateMoviesData(data.type, data.id, data.title.value)
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: [data._type],
            })
        },
    });

    const { mutate: deleteMutate } = useMutation({
        mutationFn: (data: {
            id: number,
            type: string
        }) => {
            return deleteMoviesData(data.type, data.id)
        },
        onSuccess: (data) => {
            alert('삭제 완료');
            queryClient.invalidateQueries({
                queryKey: [data._type],
            })
        },
    });

    const bannerBoxProps = {
        bannerImagesClass: 'banner',
        bannerContentClass: 'banner-info',
        poster_path: moviesFavoriteData[0]?.poster_path,
        title: moviesFavoriteData[0]?.title,
        overview: moviesFavoriteData[0]?.overview,
    }

    const favoriteTemplateProps = {
        bannerBoxProps: bannerBoxProps,
        createMutate: addMoviesFavoriteMutate,
        updateMutate: updateMutate,
        deleteMutate: deleteMutate,
        favoriteData: moviesFavoriteData,
        genreData: moviesGenreData,
    }

    return (
        <FavoriteTemplates {...favoriteTemplateProps} />
    )
}

export default FavoritePage