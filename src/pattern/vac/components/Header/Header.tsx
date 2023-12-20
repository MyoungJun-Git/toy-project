// import React from "react";
import { Link } from 'react-router-dom'
import '../../../../App.css'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Header = () => {
    // const queryClient = useQueryClient();
    // useMoviesQueries();

    /**
     * ? search Event..
     *  ! 1. custom hooks에 대한 내용을 가져오기
     *  ! 2. query client에 대한 내용을 가져오기
     */
    // const { moviesFavoriteData } = useMoviesQuery();


    const seacrhEvent = () => {
        // const client = useQueryClient();
        // client.getQueriesData({
        //
        // }).filter()


        // todo : 만약에 캐시된 데이터가 없으면 던져서 가져오는 경우
        // const results = queryClient.ensureQueryData({
        //     queryKey: ['popular'],
        //     queryFn: getMoviesData
        // });

        // const results = queryClient.getQueriesData({
        //     queryKey: ['popular']
        // });
        // console.log({results});
    }

    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="#">
                    <img
                        width={100}
                        src="https://www.kocca.kr/trend/vol30/img/s11/img_1.jpg"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link to="/" className="nav-item">
                            Home
                        </Link>
                        <Link to="/movies/favorite" className="nav-item">
                            favorite
                        </Link>

                        <Link to="/home/atomic" className="nav-item">
                            Home (Atomic)
                        </Link>
                        <Link to="/movies/favorite/atomic" className="nav-item">
                            favorite (Atomic)
                        </Link>
                        <Link to="/movies/infinite" className="nav-item">
                            Infinite Scroll
                        </Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-danger" onClick={() => seacrhEvent()}>Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
