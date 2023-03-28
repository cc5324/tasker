import { useState, useEffect, useRef, useCallback } from "react";
import { useSearchParams, useLoaderData, Link } from "react-router-dom";
import Cookies from "js-cookie";
import useTasksSearch from "@/component/useTasksSearch";

import { GithubAPI } from "@/API";

import Task from "@/component/TaskItem";

export async function loader() {
  // const tasks = await GithubAPI.GET("/issues", {
  //   params: {
  //     filter: "assigned",
  //     state: "open",
  //     per_page: 10,
  //     page: 1,
  //   },
  //   headers: {
  //     // "Content-Type": "application/json",
  //     Accept: "application/vnd.github+json",
  //     // Authorization: `Bearer ${token}`,
  //   },
  // });
  // console.log(`tasks`, tasks);
  // return tasks;
  return null;
}

export default function main() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const observe = useRef();
  const lastTaskElement = useCallback(
    (node) => {
      if (isLoading || !hasMore) return;
      if (observe.current) observe.current.disconnect();
      observe.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
          console.log(`get`);
        }
      });
      if (node) observe.current.observe(node);
    },
    [isLoading]
  );

  useEffect(() => {
    console.log(`call effect`);
    const fetchData = async () => {
      if (!hasMore) return;
      const response = await GithubAPI.GET("/issues", {
        params: {
          // filter: "assigned",
          filter: "all",
          state: "open",
          per_page: 10,
          page: page,
        },
        headers: {
          Accept: "application/vnd.github+json",
        },
      });

      if (response.length === 0) {
        setHasMore(false);
      } else {
        setTasks((prevTasks) => {
          console.log(`pre`, prevTasks);
          return [...prevTasks, ...response];
        });
      }
      setIsLoading(false);
    };

    fetchData();
  }, [page]);

  // const tasks = useLoaderData();
  const taskItems = tasks.map(
    ({ id, state, title, body, user, url, created_at, updated_at }) => (
      <Task
        title={title}
        body={body}
        avatar={user?.avatar_url}
        key={id}
        state={state}
        url={url}
        created_at={created_at}
        updated_at={updated_at}
      />
    )
  );
  console.log(`tasks`, tasks);

  return (
    <>
      <p>Main Page - All Issues</p>
      {/* <div className="bg-gray-300 p-3 grid gap-3">{taskItems}</div> */}
      <div className="bg-gray-300 p-3 grid gap-3">
        {tasks.map(
          (
            {
              id,
              state,
              title,
              body,
              user,
              url,
              created_at,
              updated_at,
              repository,
              number,
            },
            index
          ) => {
            const isObservedLast = tasks.length === index + 1;
            return (
              <Link
                key={id}
                // to={`/task/${id}`}
                to={`/task/${id}?owner=${repository.owner.login}&repo=${repository.name}&number=${number}`}
                // to={`/task/${repository.owner.login}/${repository.name}/${number}?kk=100`}
                state={{ url }}
                query={{ number }}
              >
                <Task
                  key={id}
                  title={title}
                  body={body}
                  avatar={user?.avatar_url}
                  state={state}
                  url={url}
                  created_at={created_at}
                  updated_at={updated_at}
                  ref={isObservedLast ? lastTaskElement : null}
                />
              </Link>
            );
          }
        )}
      </div>
      {isLoading && <div>Loading ...</div>}
      {!hasMore && <div>No More Tasks!</div>}
    </>
  );
}
