import Modal from 'react-bootstrap/Modal'
import { ImoviesModal } from '../interface/IMovies'
import { useRef } from 'react'
import Button from 'react-bootstrap/Button'

const MoviesModal = ({ show, onHide, moviesData, updateMutation }: ImoviesModal) => {
    const titleRef = useRef(null)
    return (
        <Modal show={show} onHide={onHide} aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">{moviesData.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    변경할 영화 제목 :
                    <input className="m-lg-3" type="text" ref={titleRef} />
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    onClick={() => {
                        updateMutation(
                            { id: moviesData.id, title: titleRef.current },
                            {
                                onSuccess: () => onHide(),
                            },
                        )
                    }}>
                    Update
                </Button>
                <Button onClick={() => onHide()}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default MoviesModal
