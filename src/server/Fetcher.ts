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
  ).then((result: any) => result.data.results);
  return response;
};

export const getTopRatedMoviesData = async () => {
  const response = await ApiConfig.get(
    // `movie/top_rated?language=en-US&page=1`
    `rated`
  ).then((result: any) => result.data.results);
  return response;
};

export const getUpcomingMoviesData = async () => {
  const response = await ApiConfig.get(
    // `movie/upcoming?language=en-US&page=1`
    `upcoming`
  ).then((result: any) => result.data.results);
  return response;
};

export const getGenreMoviesData = async () => {
  const response = await ApiConfig.get(
    // `genre/movie/list?language=ko&page=1`
    `genre`
  ).then((result: any) => result.data.genres);
  return response;
};
