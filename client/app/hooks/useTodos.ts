import { log } from "node:console";
import { todo } from "node:test";
import useSWR from "swr";

async function fetcher(key: string) {
  // keyにはエンドポイントが入ります
  return fetch(key).then((res) => res.json())
}

export const useTodos = () => {

    // SWRは、Reactアプリケーションでデータを取得・キャッシュするためのライブラリ
  const { data, isLoading, error, mutate } = useSWR('http://localhost:8080/allTodos', fetcher)

  console.log(data, isLoading, error, mutate);

  return {
    todos: data,
    isLoading,
    error,
    mutate,
  }
}