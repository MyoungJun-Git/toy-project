import Title from '../atoms/Title.tsx'
import Content from '../atoms/Content.tsx'
import { IbannerContent } from '../../../interface/Imolecules.ts'

const BannerContent = (banner:IbannerContent) => {
    const titleProps = {
        type: 'h1',
        className: '',
        title: banner.title,
    }

    const contentProps = {
        className: '',
        content: banner.overview,
    }

    return (
        <div className={banner.bannerContentClass}>
            <Title {...titleProps} />
            <Content {...contentProps} />
        </div>
    )
}

export default BannerContent