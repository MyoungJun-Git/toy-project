// import React from 'react'

import Container from 'react-bootstrap/Container'
import { Col, Row } from 'react-bootstrap'

import { useLocation } from 'react-router-dom'
import Badges from '../atoms/Badges.tsx'
import Content from '../atoms/Content.tsx'
import Icons from '../atoms/Icons.tsx'
import Images from '../atoms/images.tsx'
import { useMoviesQuery } from '../../../hooks/useMoviesQuery.ts'
// import { useMoviesDetailQuery } from '../../../hooks/useMoviesQuery.ts'

const MoviesDetailPage = () => {
    const data = useLocation()
    const id = data.state.id

    // const client = useQueryClient();
    // const moviesDetailData = client.ensureQueryData({
    //     queryKey: [id],
    //     queryFn: () => getMovieDetailData(id),
    // })
    //
    // console.log(moviesDetailData);

    // const {data: moviesDetailData } = useMoviesDetailQuery(id);
    // const { data: moviesDetailData } = useSuspenseQuery({
    //     queryKey: [id],
    //     queryFn: () => getMovieDetailData(id),
    //     // staleTime: 1000,
    //     // refetchInterval: 1000 * 60, // todo : 1분 주기 refetch..
    // })

    const { useMoviesDetailData } = useMoviesQuery();
    const moviesDetailResult = useMoviesDetailData(id);
    const moviesDetailData = moviesDetailResult.data;

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Images src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${moviesDetailData.poster_path}`} alt="images.." />
                    </Col>
                    <Col>
                        <div className="parent_detail">
                            <div className="detail">
                                {moviesDetailData.genres.map((item: {
                                    id: number,
                                    name: string
                                }, index: number) => {
                                    return (
                                        <Badges
                                            key={index}
                                            bg="danger"
                                            name={item.name}
                                        />
                                    )
                                })}
                            </div>
                            <Content className="detail_title" content={moviesDetailData.title} />
                            <Content className="tag_line" content={moviesDetailData.tagline} />
                            <div className={'score-info'}>
                                <Icons icon="mdi:star-outline" fontSize='36px' paddingBottom='5px' marginBottom='2px' marginLeft='' />
                                <span style={{ fontSize: '24px', marginTop: '40px' }}>
                                    {moviesDetailData.vote_average}
                                </span>
                                <Icons icon="lets-icons:group-fill" fontSize='36px' paddingBottom='5px' marginBottom='2px' marginLeft='20px' />
                                <span style={{ fontSize: '24px' }}>{moviesDetailData.popularity}</span>
                                <span
                                    style={{
                                        fontSize: '24px',
                                        marginLeft: '20px',
                                        color: 'red',
                                    }}
                                >
                                    {moviesDetailData.adult ? '청불' : 'Under 18'}
                                </span>
                                <div className={'overview'}>{moviesDetailData.overview}</div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MoviesDetailPage