import { useState, useEffect } from "react";
import { useSearchParams, useLocation, useLoaderData } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

import { GithubAPI } from "@/API";

import Task from "@/component/task";

export async function loader() {
  const tasks = await GithubAPI.GET("/issues", {
    params: {
      filter: "assigned",
      state: "open",
      per_page: 10,
      page: 1,
    },
    headers: {
      // "Content-Type": "application/json",
      Accept: "application/vnd.github+json",
      // Authorization: `Bearer ${token}`,
    },
  });
  console.log(`tasks`, tasks);
  return tasks;
}

export default function main() {
  let [searchParams, setSearchParams] = useSearchParams();

  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  const tasks = useLoaderData();
  const taskItems = tasks.map(
    ({ id, state, title, body, user, url, created_at, updated_at }) => (
      <Task
        title={title}
        body={body}
        avatar={user.avatar_url}
        key={id}
        state={state}
        url={url}
        created_at={created_at}
        updated_at={updated_at}
      />
    )
  );
  console.log(`tasks`, tasks);

  const token = Cookies.get("toke");
  const [tasksList, setTaskList] = useState([]);
  const [page, setPage] = useState(1);

  // useEffect(() => {
  //   const headers = {
  //     "Content-Type": "application/json",
  //     Accept: "application/vnd.github+json",
  //     Authorization: `Bearer ${token}`,
  //   };

  //   async function fetchTasks() {
  //     const res = await axios({
  //       method: "get",
  //       url: `https://api.github.com/issues`,
  //       params: {
  //         filter: "assigned",
  //         state: "open",
  //         per_page: 10,
  //         page: page,
  //       },
  //       headers: headers,
  //     });
  //     setTaskList(res.data);
  //     console.log(`task`, tasksList);
  //   }
  //   fetchTasks();
  // }, [page]);

  async function handleLoadIssue() {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
    };
    const res = await axios({
      method: "get",
      url: `https://api.github.com/issues`,
      params: {
        filter: "assigned",
        state: "open",
        per_page: 10,
        page: 1,
      },
      headers: headers,
    });
    console.log(res);
  }

  return (
    <>
      <p>Main Page - All Issues</p>
      <div className="bg-gray-300 p-3 grid gap-3">{taskItems}</div>
      <button
        className="cursor-pointer bg-blue-600 hover:bg-blue-500 shadow-xl px-5 py-2 inline-block text-blue-100 hover:text-white rounded w-fit"
        onClick={handleLoadIssue}
      >
        Load
      </button>
    </>
  );
}
