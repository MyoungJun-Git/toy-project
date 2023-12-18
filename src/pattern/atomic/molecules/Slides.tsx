// import React from 'react'
import 'react-multi-carousel/lib/styles.css'
import Carousel from 'react-multi-carousel'

import { ImoviesData, ImoviesGenreData, Islide } from '../../../interface/Imolecules.ts'
import Title from '../atoms/Title.tsx'
import Badges from '../atoms/Badges.tsx'
import Buttons from '../atoms/Buttons.tsx'
import { useNavigate } from 'react-router-dom'

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

const Slides = (slidesProps: Islide) => {
    const navigate = useNavigate();

    return (
        <Carousel responsive={responsive}>
            {
                slidesProps.movieData.map((item: ImoviesData, index: number) => (
                    <div key={index}
                         className="card"
                         style={{
                             backgroundImage:
                                 'url(' +
                                 `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.poster_path}` +
                                 ')',
                         }}
                         onClick={() => {
                             navigate(`/movies/detail/${item.id}`, {
                                state: {
                                    "id": item.id
                                }
                             });
                         }}
                    >
                        <div className="overlay">
                            <Title type="h4" title={item.title} />
                            <div>
                                {
                                    item.genre_ids.map((id: number) => {
                                        const genreItem = slidesProps.genreData.find((item: ImoviesGenreData) => {
                                            return item.id === id
                                        })

                                        return genreItem && <Badges key={genreItem.id} bg="danger" name={genreItem?.name} />
                                    })
                                }
                            </div>
                            <div>
                                <div>{item.vote_average}</div>
                                <div>{item.adult ? '청불' : 'Under 18'}</div>
                            </div>
                            <Buttons className="button"
                                     hidden={slidesProps.type === 'favorite'}
                                     variant={'outline-warning'}
                                     onClick={(e: React.MouseEvent<HTMLElement>) => {
                                         slidesProps.createMutate({
                                             'type': slidesProps.type,
                                             'id': item.id,
                                             'poster_path': item.poster_path,
                                             'title': item.title,
                                             'genre_ids': item.genre_ids,
                                             'vote_average': item.vote_average,
                                             'overview': item.overview,
                                             'adult': item.adult,
                                         });
                                         e.stopPropagation(); // todo: parent tag onClick !== child tag onClick
                                     }}>
                                관심
                            </Buttons>
                            <Buttons className="button"
                                     hidden={true}
                                     variant={'outline-info'}
                                     onClick={slidesProps.updateMutate}>
                                수정
                            </Buttons>
                            <Buttons className="button"
                                     hidden={false}
                                     variant={'outline-danger'}
                                     onClick={(e:React.MouseEvent<HTMLElement>) => {
                                         slidesProps.deleteMutate({
                                             'id': item.id,
                                             'type': slidesProps.type
                                         })
                                         e.stopPropagation(); // todo: parent tag onClick !== child tag onClick
                                     }}
                            >
                                삭제
                            </Buttons>
                        </div>
                    </div>
                ))
            }
        </Carousel>
    )
}

export default Slides