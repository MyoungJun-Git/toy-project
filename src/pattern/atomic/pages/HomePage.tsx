import HomeTemplate from '../templates/HomeTemplates.tsx'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import {
    deleteMoviesData,
    updateMoviesData,
} from '../../../server/Fetcher.ts'
import { useMoviesQuery } from '../../../hooks/useMoviesQuery.ts'

const HomePage = () => {
    // todo : network는 1번 OK >> console.log >> 8번???? > 왜일까?
    /**
     * todo : 경우의 수
     *  case 1: useGetMoviesQueries(); 호출 하는 컴포넌트가 2개.. > 로그 상 4개씩 찍힐까?
     */

    const { moviesData: results, moviesGenreData, addMoviesFavoriteMutate } = useMoviesQuery();

    const queryClient = useQueryClient()
    const { mutate: deleteMutate } = useMutation({
        mutationFn: (data: {
            id: number,
            type: string
        }) => {
            return deleteMoviesData(data.type, data.id)
        },
        onSuccess: (data) => {
            alert('삭제 완료')
            queryClient.invalidateQueries({
                queryKey: [data._type],
            })
        },
    })

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

    const bannerBoxProps = {
        bannerImagesClass: 'banner',
        bannerContentClass: 'banner-info',
        poster_path: results[0][0]?.poster_path,
        title: results[0][0]?.title,
        overview: results[0][0]?.overview,
    }

    const homeTemplateProps = {
        bannerBoxProps: bannerBoxProps,
        createMutate: addMoviesFavoriteMutate,
        updateMutate: updateMutate,
        deleteMutate: deleteMutate,
        popularData: results[0],
        ratedData: results[1],
        upcomingData: results[2],
        genreData: moviesGenreData,
    }

    return (
        <HomeTemplate {...homeTemplateProps} />
    )
}

export default HomePage