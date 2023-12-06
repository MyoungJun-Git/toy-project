export interface IMoviesCardClass {
  cardClassName: string;
  cardChildClassName: string;
  cardChildBadgeClassName: string;
}

export interface IMoviesCardData {
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
