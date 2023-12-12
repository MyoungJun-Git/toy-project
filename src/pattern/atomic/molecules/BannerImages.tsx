import { IbannerImages } from '../../../interface/Imolecules.ts'

/**
 * todo : BannerBox 컴포넌트 안에 BannerImages in BannerContent 컴포넌트가 있음. Images컴포넌트 안에 Content에 대한 컴포넌트를 ReactNode의 Child로 사용해야만 화면에 표시
 * @param bannerImages
 * @constructor
 */
const BannerImages = (bannerImages: IbannerImages) => {
    return (
        <div
            className={bannerImages.bannerImagesClass}
            style={{
                backgroundImage:
                    'url(' +
                    `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${bannerImages.poster_path}` +
                    ')',
            }}
        >
            {bannerImages.children}
        </div>
    )
}

export default BannerImages