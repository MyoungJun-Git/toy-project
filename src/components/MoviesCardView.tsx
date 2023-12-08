import { Badge } from 'react-bootstrap'
import { IMoviesCard, IMoviesGenreData } from '../interface/IMovies'
import Button from 'react-bootstrap/Button'
import MoviesModal from '../components/MoviesModal'
import { useState } from 'react'

const MoviesCardView = ({
    moviesCardClass,
    moviesCardData,
    moviesGenreData,
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
            <MoviesModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                moviesData={moviesCardData}
                updateMutation={updateMutation}
            />
        </div>
    )
}

export default MoviesCardView
