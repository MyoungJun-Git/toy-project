// import React from 'react'

import '../../../App.css'
// import { useSuspenseQueries } from '@tanstack/react-query'
// import {
//     getGenreMoviesData,
//     getMoviesData,
//     getTopRatedMoviesData,
//     getUpcomingMoviesData,
// } from '../../../server/Fetcher.ts'
import BannerBox from '../organisms/BannerBox.tsx'
import SlidesBox from '../organisms/SlidesBox.tsx'
import React from 'react'
import { IhomeTemplate } from '../../../interface/Itemplates.ts'
// import { useGetMoviesQueries } from '../../../server/Fetcher.ts'

const HomeTemplates = (homeProps:IhomeTemplate) => {
    // todo : props drilling 피해보자.... > 만약에 상위 컴포넌트에서 useGetMoviesQueries() 호출하고 하위 templates 에서 또 호출하면? network 확인해보기..

    // const results = useGetMoviesQueries();
    // console.log({results});

    return (
        <React.Fragment>
            <BannerBox {...homeProps.bannerBoxProps} />
            <SlidesBox type="popular" title="Top Popular Movies" createMutate={homeProps.createMutate} updateMutate={homeProps.updateMutate} deleteMutate={homeProps.deleteMutate} movieData={homeProps.popularData} genreData={homeProps.genreData} />
            <SlidesBox type="rated" title="Top Rated Movies" createMutate={homeProps.createMutate} updateMutate={homeProps.updateMutate} deleteMutate={homeProps.deleteMutate} movieData={homeProps.ratedData} genreData={homeProps.genreData} />
            <SlidesBox type="upcoming" title="Upcoming Movies" createMutate={homeProps.createMutate} updateMutate={homeProps.updateMutate} deleteMutate={homeProps.deleteMutate} movieData={homeProps.upcomingData} genreData={homeProps.genreData} />
        </React.Fragment>
    )
}

export default HomeTemplates