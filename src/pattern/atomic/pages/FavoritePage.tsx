import FavoriteTemplates from '../templates/FavoriteTemplates.tsx'
import { useMutation, useQueryClient, useSuspenseQueries } from '@tanstack/react-query'
import {
    createMoviesData, deleteMoviesData, getFavoriteData, getGenreMoviesData, updateMoviesData,
} from '../../../server/Fetcher.ts'

const FavoritePage = () => {
    const queryClient = useQueryClient()

    const results = useSuspenseQueries({
        queries: [
            {
                queryKey: ['favorite'],
                queryFn: getFavoriteData,
            },
            {
                queryKey: ['genre'],
                queryFn: getGenreMoviesData,
            },
        ],
    })


    const { mutate: createMutate } = useMutation({
        mutationFn: (data: any) => {
            return createMoviesData(data.type, data)
        },
        onSuccess: (data) => {
            alert('관심 추가 완료')
            queryClient.invalidateQueries({
                queryKey: [data._type],
            })
        },
        onError: (data) => {
            alert(data.message)
        },
    });

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
        poster_path: results[0].data[0]?.poster_path,
        title: results[0].data[0]?.title,
        overview: results[0].data[0]?.overview,
    }

    const favoriteTemplateProps = {
        bannerBoxProps: bannerBoxProps,
        createMutate: createMutate,
        updateMutate: updateMutate,
        deleteMutate: deleteMutate,
        favoriteData: results[0].data,
        genreData: results[1].data,
    }

    return (
        <FavoriteTemplates {...favoriteTemplateProps} />
    )
}

export default FavoritePage