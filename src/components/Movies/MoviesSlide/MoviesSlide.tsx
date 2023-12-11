import 'react-multi-carousel/lib/styles.css'
import { IMoviesCardData } from '../../../interface/IMovies.ts'
import MoviesSlideView from './MoviesSlideView.tsx'
import Carousel from 'react-multi-carousel'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createMoviesData, deleteMoviesData, updateMoviesData } from '../../../server/Fetcher.ts'
// import Toast from '../../Toast/Toast.tsx'

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
            alert('삭제 완료');
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

    // const { mutate: createMutate, isError: createMutateIsError, error: createMutateError } = useMutation({
    const { mutate: createMutate } = useMutation({
        mutationFn: (data: any) => {
            return createMoviesData(type, data)
        },
        onSuccess: () => {
            alert('관심 추가 완료');
            queryClient.invalidateQueries({
                queryKey: [type],
            })
        },
        onError: (data) => {
            alert(data.message);
        }
    })

    // todo : 토스트 메시지 팝업 관련하여, 테스트 진행 후 임시 주석
    // if (createMutateIsError) {
    //     const toastProps = {
    //         isError: true,
    //         type: {
    //             style: 'error',
    //             icon: true,
    //         },
    //         closable: true,
    //         toastMessage: createMutateError.message,
    //     }
    //
    //     return <Toast {...toastProps} />
    // }


    // const toastPopup = (message: string) => {
    //     const toastProps = {
    //         isError: true,
    //         type: {
    //             style: 'error',
    //             icon: true,
    //         },
    //         closable: true,
    //         toastMessage: message,
    //     }
    //
    //     return <Toast {...toastProps} />;
    // }

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
                        cardType: type,
                        cardClassName: 'card',
                        cardChildClassName: 'overlay',
                        cardChildBadgeClassName: 'danger',
                        cardChildCreateBtnVariant: 'outline-warning',
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
                        overview: item?.overview,
                        adult: item?.adult,
                    }}
                    moviesGenreData={movieGenreData}
                    createMoviesData={createMutate}
                    updateMutation={updateMutate}
                    deleteMutation={deleteMutate}
                />
            ))}
        </Carousel>
    )
}

export default MoviesSlide
