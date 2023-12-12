import { ImoviesData, ImoviesGenreData } from './Imolecules.ts'
export interface IhomeTemplate {
    bannerBoxProps : {
        bannerImagesClass: string
        bannerContentClass: string
        poster_path: string
        title: string
        overview: string
    },
    createMutate: any
    updateMutate: any
    deleteMutate: any
    popularData: ImoviesData[]
    ratedData: ImoviesData[]
    upcomingData: ImoviesData[]
    genreData: ImoviesGenreData[]
}