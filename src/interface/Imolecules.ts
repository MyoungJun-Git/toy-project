// todo : 아래는 atomic 패턴에 대한 인터페이스 정의
import { ReactNode } from 'react'

export interface IbannerImages {
    children: ReactNode
    bannerImagesClass?: string
    poster_path?: string
}
export interface IbannerContent {
    bannerContentClass?: string
    title?: string
    overview?: string
}



export interface ImoviesData {
    adult: boolean
    backdrop_path: string
    id: number
    title: string
    original_language: string
    original_title: string
    overview: string
    poster_path: string
    media_type: string
    genre_ids: number[]
    popularity: number
    release_date: string
    video: boolean
    vote_average: number
    vote_count: number
}

export interface ImoviesGenreData {
    id: number
    name: string
}[]

export interface Islide {
    type?: string
    createMutate: any
    updateMutate: any
    deleteMutate: any
    movieData: ImoviesData[]
    genreData: ImoviesGenreData[]
}