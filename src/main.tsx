import React from 'react'
import ReactDOM from 'react-dom/client'

// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import App from './App.tsx'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 3, // ? retry 3회 request..
            staleTime: (60 * 3 * 1000),
            // ? 해당 캐싱되어있는 데이터를 언제까지 최신이라고 판단 할 것 인지? (default: 0) 계속 새롭게 refetching
            gcTime: (60 * 1000),
            // ? 만약에 캐싱되어있는 데이터를 사용하지 않을 경우, 정해진 시간 이후 캐시가 gc로 인해 삭제 됨. (default: 5분)
        },
        mutations: {
            // ! mutation error 공통 관리
            onError: (error, variables, context) => {
                console.log(variables, context);
                alert(error.message);
            }
        }
    },
})

/**
 * ! devtools 설정
 *  * 사용이유 : key값을 토대로 data들을 확인할 수 있음
 *  ? initialIsOpen : 창을 계속 열어둘건지 설정
 *  ? position : devtool 버튼 위치 (default = bottom-left)
 */
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <App />
            <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
    </React.StrictMode>
)
