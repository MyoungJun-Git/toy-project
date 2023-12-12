import { Badge } from 'react-bootstrap'
import { IMoviesCard, IMoviesGenreData } from '../../../../interface/IMovies.ts'
import Button from 'react-bootstrap/Button'
import MoviesModalView from '../Modal/MoviesModalView.tsx'
import { useState } from 'react'

const MoviesSlideView = ({
    moviesCardClass,
    moviesCardData,
    moviesGenreData,
    createMoviesData,
    deleteMutation,
    updateMutation,
}: IMoviesCard & any) => {
    const [modalShow, setModalShow] = useState(false)

    return (
        <div
            // ref={moviesCardRef}
            // key={moviesCardData.id}
            className={moviesCardClass.cardClassName}
            style={{
                backgroundImage:
                    'url(' +
                    `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${moviesCardData?.poster_path}` +
                    ')',
            }}>
            <div className={moviesCardClass.cardChildClassName}>
                <h4>{moviesCardData.title}</h4>
                <div>
                    {moviesCardData.genre_ids.map((id: number, index: number) => (
                        <Badge key={index} bg={moviesCardClass.cardChildBadgeClassName}>
                            {moviesGenreData.find((item: IMoviesGenreData) => item.id === id).name}
                        </Badge>
                    ))}
                </div>
                <div>
                    <div>{moviesCardData.vote_average}</div>
                    <div>{moviesCardData.adult ? '청불' : 'Under 18'}</div>
                </div>
                <Button
                    hidden={moviesCardClass.cardType === 'favorite'}
                    className={moviesCardClass.carChildBtnClassName}
                    variant={moviesCardClass.cardChildCreateBtnVariant}
                    onClick={() => createMoviesData({
                        'id': moviesCardData.id,
                        'poster_path': moviesCardData.poster_path,
                        'title': moviesCardData.title,
                        'genre_ids': moviesCardData.genre_ids,
                        'vote_average': moviesCardData.vote_average,
                        'overview': moviesCardData.overview,
                        'adult': moviesCardData.adult,
                    })}>
                    관심
                </Button>
                <Button
                    className={moviesCardClass.carChildBtnClassName}
                    variant={moviesCardClass.cardChildUpdateBtnVariant}
                    onClick={() => setModalShow(true)}>
                    수정
                </Button>
                <Button
                    className={moviesCardClass.carChildBtnClassName}
                    variant={moviesCardClass.cardChildDeleteBtnVariant}
                    // onClick={deleteMoviesEvent(moviesCardRef)}
                    onClick={() => deleteMutation(moviesCardData.id)}>
                    삭제
                </Button>
            </div>
            <MoviesModalView
                show={modalShow}
                onHide={() => setModalShow(false)}
                moviesData={moviesCardData}
                updateMutation={updateMutation}
            />
        </div>
    )
}

export default MoviesSlideView
