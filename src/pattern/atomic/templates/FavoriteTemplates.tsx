// import React from 'react'

import BannerBox from '../organisms/BannerBox.tsx'
import SlidesBox from '../organisms/SlidesBox.tsx'
import { IfavoriteTemplate } from '../../../interface/Itemplates.ts'

const FavoriteTemplates = (favoriteProps: IfavoriteTemplate) => {
    return (
        <div className="movies_favorite">
            <BannerBox {...favoriteProps.bannerBoxProps} />
            <SlidesBox type="favorite" title="Top favorite Movies" createMutate={favoriteProps.createMutate}
                       updateMutate={favoriteProps.updateMutate} deleteMutate={favoriteProps.deleteMutate}
                       movieData={favoriteProps.favoriteData} genreData={favoriteProps.genreData} />
        </div>
    )
}

export default FavoriteTemplates