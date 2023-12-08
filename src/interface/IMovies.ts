export interface IMoviesCardClass {
  cardClassName: string;
  cardChildClassName: string;
  cardChildBadgeClassName: string;
  carChildBtnClassName: string;
  cardChildDeleteBtnVariant: string;
  cardChildUpdateBtnVariant: string;
}

export interface IMoviesGenreData {
  id: number;
  name: string;
}
[];

export interface IMoviesCardData {
  id: number;
  poster_path: string;
  title: string;
  genre_ids: number[];
  vote_average: string;
  adult: boolean;
}

export interface IMoviesCard {
  moviesCardClass: IMoviesCardClass;
  moviesCardData: IMoviesCardData;
}

export interface ImoviesData {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface ImoviesModal {
  show: boolean;
  onHide?: any;
  moviesData: ImoviesData;
  updateMutation?: any;
}
