/**
 * ! Fetcher.ts file
 *  ? Data Fetching 관련한 API Function들을 정의하는 file.
 */

import { ApiConfig } from "../api/ApiConfig";

/**
 * Movies 정보 반환
 */
export const getMoviesData = async () => {
  const response = await ApiConfig.get(
    // `movie/popular?language=en-US&page=1`
    // `trending/movie/week?language=ko&page=1`
    `popular`
  ).then((res: any) => res.data);
  return response;
};

export const getTopRatedMoviesData = async () => {
  const response = await ApiConfig.get(
    // `movie/top_rated?language=en-US&page=1`
    `rated`
  ).then((res: any) => res.data);
  return response;
};

export const getUpcomingMoviesData = async () => {
  const response = await ApiConfig.get(
    // `movie/upcoming?language=en-US&page=1`
    `upcoming`
  ).then((res: any) => res.data);
  return response;
};

export const getGenreMoviesData = async () => {
  const response = await ApiConfig.get(
    // `genre/movie/list?language=ko&page=1`
    `genre`
  ).then((res: any) => res.data);
  return response;
};

export const deleteMoviesData = async (
  moviesType: string,
  moviesId: number
) => {
  const response = await ApiConfig.delete(moviesType + "/" + moviesId).then(
    (res: any) => res.data
  );
  return response;
};

export const updateMoviesData = async (
    moviesType: string,
    moviesId: number,
    moviesTitle: any,
) => {
  const response = await ApiConfig.patch(moviesType + "/" + moviesId, {
    "title": moviesTitle
  }).then(
      (res: any) => res.data
  );
  return response;
};

// ! exmaple..
// export const deleteMoviesData = async (moviesId: number) => {
//   const response = await ApiConfig.delete(`popular`, {
//     data: {
//       id: moviesId,
//     },
//   }).then((res: any) => res.data);
//   return response;
// };
