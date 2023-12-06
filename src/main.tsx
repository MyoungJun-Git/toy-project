import React from "react";
import ReactDOM from "react-dom/client";

// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import App from "./App.tsx";

const queryClient = new QueryClient(); // ! QueryClient 인스턴스 생성

/**
 * ! devtools 설정
 *  * 사용이유 : key값을 토대로 data들을 확인할 수 있음
 *  ? initialIsOpen : 창을 계속 열어둘건지 설정
 *  ? position : devtool 버튼 위치 (default = bottom-left)
 */
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  </React.StrictMode>
);
