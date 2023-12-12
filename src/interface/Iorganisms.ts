import { ImoviesData, ImoviesGenreData } from './Imolecules.ts'

export interface IbannerBox {
    bannerImagesClass: string
    bannerContentClass: string
    poster_path: string
    title: string
    overview: string
}

export interface IslidesBox {
    title: string
    createMutate: any
    updateMutate: any
    deleteMutate: any
    movieData: ImoviesData[]
    genreData: ImoviesGenreData[]
}