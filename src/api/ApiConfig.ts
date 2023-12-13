import axios from 'axios'

/**
 * * ApiConfig.ts file은  baseURL 및 headers에 대한 공통적인 부분을 관리하기 위함의 파일임.
 */
// ! vite, CRA 환경변수 import하는 방식 다름.
const moviesToken = import.meta.env.VITE_MOVIES_TOKEN;

export const ApiConfig = axios.create({
    // baseURL: `https://api.themoviedb.org/3/`,
    // baseURL: `https://my-json-server.typicode.com/MyoungJun-Git/toy-project/posts/`,
    baseURL: `http://localhost/`,
    headers: {
        'Content-Type': 'application/json',
    },
})

export const movieApiConfig = axios.create({
    baseURL: `https://api.themoviedb.org/3/`,
    headers: {
        Authorization: `Bearer ${moviesToken}`,
        'Content-Type': 'application/json',
        'accept': 'application/json',
    },
})