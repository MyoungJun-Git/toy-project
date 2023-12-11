import 'react-multi-carousel/lib/styles.css'
import { IMoviesCardData } from '../../interface/IMovies.ts'
import MoviesSlideView from './MoviesSlideView.tsx'
import Carousel from 'react-multi-carousel'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteMoviesData, updateMoviesData } from '../../server/Fetcher.ts'

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
}

const MoviesSlide = ({ type, movieData, movieGenreData }: any) => {
    //   const [moviesId, setMoviesId] = useState<number>(0);
    const queryClient = useQueryClient()
    const { mutate: deleteMutate } = useMutation({
        mutationFn: (id: number) => {
            return deleteMoviesData(type, id)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [type],
            })
        },
    })

    const { mutate: updateMutate } = useMutation({
        mutationFn: (data: any) => {
            return updateMoviesData(type, data.id, data.title.value)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [type],
            })
        },
    })

    // const deleteMutate = (id:number) => {
    // 	return useMutation({
    // 		mutationFn: () => {
    // 			return deleteMoviesData(type, id);
    // 		},
    // 		onSuccess: () => {
    // 			// ! cache 무효화 update.
    // 			queryClient.invalidateQueries({
    // 				queryKey: [type],
    // 			});
    // 		},
    // 	});
    // }

    // const updateMutate = (data: {
    // 	id: number
    // 	title: {
    // 		value: string
    // 	}
    // }) => {
    // 	console.log({data});
    // 	return useMutation({
    // 		mutationFn: () => {
    // 			return updateMoviesData(type, data.id, data.title.value);
    // 			// return updateMoviesData(type, id);
    // 		},
    // 		onSuccess: () => {
    // 			queryClient.invalidateQueries({
    // 				queryKey: [type],
    // 			});
    // 		},
    // 	});
    // }

    return (
        <Carousel responsive={responsive}>
            {movieData.map((item: IMoviesCardData, index: number) => (
                <MoviesSlideView
                    key={index}
                    moviesCardClass={{
                        cardClassName: 'card',
                        cardChildClassName: 'overlay',
                        cardChildBadgeClassName: 'danger',
                        cardChildDeleteBtnVariant: 'outline-danger',
                        cardChildUpdateBtnVariant: 'outline-info',
                        carChildBtnClassName: 'button',
                    }}
                    moviesCardData={{
                        id: item?.id,
                        poster_path: item?.poster_path,
                        title: item?.title,
                        genre_ids: item.genre_ids,
                        vote_average: item?.vote_average,
                        adult: item?.adult,
                    }}
                    moviesGenreData={movieGenreData}
                    updateMutation={updateMutate}
                    deleteMutation={deleteMutate}
                />
            ))}
        </Carousel>
    )
}

export default MoviesSlide
