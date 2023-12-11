import Banner from "../Banner/Banner.tsx";
import MoviesSlide from "../MoviesSlide/MoviesSlide.tsx";
import React from "react";
import {useSuspenseQueries} from "@tanstack/react-query";
import {
    getGenreMoviesData,
    getMoviesData,
    getTopRatedMoviesData,
    getUpcomingMoviesData,
} from "../../server/Fetcher.ts";

const Home = () => {
    /**
     * ! https://my-json-server.typicode.com/MyoungJun-Git/toy-project/db
     *
     * suspense의 옵션을 true로 할 경우 waterfall..
     * suspense의 옵션을 false 및 default의 경우 병렬처리로 진행
     *
     *  * 근데, suspense를 왜써야할까?
     *   ! Component 자식을 호출할 때, length가 뭐고 ?.data 값이 있는지 판단하고 이러한 작업을 안해도됨...
     *  * useQuery options suspense 옵션을 true로 설정할 경우, 병렬로 처리되지 않아 아래코드 처럼 사용했을 경우, waterfall 발생
     *   ? 이부분을 어떻게 해결을 할 것인가에 대한 고민
     *    ? useQueris를 사용하자. 병렬처리 OK
     *
     *
     *  ! useQueries는 Suspense와 함께 사용 시 정상적으로 동작하지 않는 이슈가 있는데
     *   * 이번 v4.5.0 패치에 해당 사항이 수정됨.
     *
     *  ? npm i -D @tanstack/react-query
     *  ? npm i -D @tanstack/eslint-plugin-query
     *
     */

    const results = useSuspenseQueries({
        queries: [
            {
                queryKey: ["popular"],
                queryFn: getMoviesData,
            },
            {
                queryKey: ["rated"],
                queryFn: getTopRatedMoviesData,
            },
            {
                queryKey: ["upcoming"],
                queryFn: getUpcomingMoviesData,
            },
            {
                queryKey: ["genre"],
                queryFn: getGenreMoviesData,
            },
        ],
    });

    return (
        <React.Fragment>
            <Banner movieData={results[0].data}/>
            <h1 className="home">Top Popular Movies</h1>
            <MoviesSlide
                type="popular"
                movieData={results[0].data}
                movieGenreData={results[3].data}
            />
            <h1 className="home">Top Rated Movies</h1>
            <MoviesSlide
                type="rated"
                movieData={results[1].data}
                movieGenreData={results[3].data}
            />
            <h1 className="home">Upcoming Movies</h1>
            <MoviesSlide
                type="upcoming"
                movieData={results[2].data}
                movieGenreData={results[3].data}
            />
        </React.Fragment>
    );
};

export default Home;
