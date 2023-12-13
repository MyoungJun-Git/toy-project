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

const HomeTemplates = (homeProps:IhomeTemplate) => {
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