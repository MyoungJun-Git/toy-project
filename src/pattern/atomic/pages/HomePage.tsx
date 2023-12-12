import HomeTemplate from '../templates/HomeTemplates.tsx'
import { useMutation, useQueryClient, useSuspenseQueries } from '@tanstack/react-query'
import {
    createMoviesData, deleteMoviesData,
    getGenreMoviesData,
    getMoviesData,
    getTopRatedMoviesData,
    getUpcomingMoviesData, updateMoviesData,
} from '../../../server/Fetcher.ts'
const HomePage = () => {
    const results = useSuspenseQueries({
        queries: [
            {
                queryKey: ['popular'],
                queryFn: getMoviesData,
            },
            {
                queryKey: ['rated'],
                queryFn: getTopRatedMoviesData,
            },
            {
                queryKey: ['upcoming'],
                queryFn: getUpcomingMoviesData,
            },
            {
                queryKey: ['genre'],
                queryFn: getGenreMoviesData,
            },
        ],
    })

    const queryClient = useQueryClient();
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
    })

    const { mutate: createMutate } = useMutation({
        mutationFn: (data: any) => {
            return createMoviesData(data.type, data)
        },
        onSuccess: (data) => {
            alert('관심 추가 완료');
            queryClient.invalidateQueries({
                queryKey: [data._type],
            })
        },
        onError: (data) => {
            alert(data.message);
        }
    })

    const bannerBoxProps = {
        bannerImagesClass: 'banner',
        bannerContentClass: 'banner-info',
        poster_path: results[0].data[0]?.poster_path,
        title: results[0].data[0]?.title,
        overview: results[0].data[0]?.overview,
    }

    const homeTemplateProps = {
        bannerBoxProps: bannerBoxProps,
        createMutate: createMutate,
        updateMutate: updateMutate,
        deleteMutate: deleteMutate,
        popularData: results[0].data,
        ratedData: results[2].data,
        upcomingData: results[1].data,
        genreData: results[3].data
    }

    return (
        <HomeTemplate {...homeTemplateProps} />
    )
}

export default HomePage