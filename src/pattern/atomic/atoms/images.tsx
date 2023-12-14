// import React from 'react'

import { Iimages } from '../../../interface/Iatoms.ts'

const Images = (imagesProps: Iimages) => {
    return (
        <img
            src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${imagesProps.src}`}
            alt={imagesProps.alt} />
    )
}

export default Images