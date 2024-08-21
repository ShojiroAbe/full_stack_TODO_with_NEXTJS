"use client"
// ↑ "use client" は、Next.js 13以降で導入された機能で、特定のコンポーネントやファイルがクライアントサイドでのみ実行されることを示します。
// これを設定した理由は、今Next.js13はデフォルトでサーバーサイドでレンダリングされるのに対して、"useSWR"（他useState, useEffect）がクライアンサイドでしか実行されないため

import { Todo } from "./components/Todo";
import useSWR from "swr";

async function fetcher(key: string) {
  console.log(key);
  // keyにはエンドポイントが入ります
  return fetch(key).then((res) => res.json())
}

export default function Home() {
  // const allTodos = await fetch("API", { cache: "no-store" })
  // const allTodos = await fetch("API", { cache: "force-cache" })

const { data, isLoading, error } = useSWR('http://localhost:8080/allTodos', fetcher)

console.log(data);

  return (
    <div
      className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-32 py-4 px-4"
    >
      <div className="px-4 py-2">
        <h1 className="text-gray-800 font-bold text-2xl uppercase">To-Do List</h1>
      </div>
      <form className="w-full max-w-sm mx-auto px-4 py-2">
        <div className="flex items-center border-b-2 border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent
          border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight
          focus:outline-none"
            type="text"
            placeholder="Add a task"
          />
          <button
            className="duration-150 flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
      <ul className="divide-y divide-gray-200 px-4">
        <Todo />
      </ul>
    </div>
  );
}
