import Title from '../atoms/Title.tsx'
import { IslidesBox } from '../../../interface/Iorganisms.ts'
import Slides from '../molecules/Slides.tsx'

const SlidesBox = (slidesBoxProps: IslidesBox) => {
    return (
        <div>
            <Title type="h1" className="home" title={slidesBoxProps.title} />
            <Slides createMutate={slidesBoxProps.createMutate}
                    updateMutate={slidesBoxProps.updateMutate}
                    deleteMutate={slidesBoxProps.deleteMutate}
                    movieData={slidesBoxProps.movieData}
                    genreData={slidesBoxProps.genreData} />
        </div>
    )
}

export default SlidesBox