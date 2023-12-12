// import React from 'react'
import { lazy } from 'react'

import { IbannerBox } from '../../../interface/Iorganisms.ts'
// import BannerImages from '../molecules/BannerImages.tsx'
// import BannerContent from '../molecules/BannerContent.tsx'

const BannerImages = lazy(() => import('../molecules/BannerImages.tsx'))
const BannerContent = lazy(() => import('../molecules/BannerContent.tsx'))


const BannerBox = (bannerBoxProps: IbannerBox) => {
    return (
        <BannerImages bannerImagesClass={bannerBoxProps.bannerImagesClass} poster_path={bannerBoxProps.poster_path}>
            <BannerContent bannerContentClass={bannerBoxProps.bannerContentClass} title={bannerBoxProps.title}
                           overview={bannerBoxProps.overview} />
        </BannerImages>
    )
}

export default BannerBox