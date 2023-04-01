import { useState, useEffect, useRef, useCallback } from "react";
import { useSearchParams, useLoaderData, Link } from "react-router-dom";

import { GithubAPI } from "@/API";

import { PlusIcon } from "@heroicons/react/24/outline";
import Task from "@/component/TaskItem";
import Spinner from "@/component/SpinnerItem.jsx";

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
          sort: "created",
          direction: "asc",
        },
        headers: {
          Accept: "application/vnd.github+json",
        },
      });
      console.log(response);

      if (response.length === 0) {
        setHasMore(false);
      } else {
        setTasks((prevTasks) => {
          return [...prevTasks, ...response];
        });
      }
      setIsLoading(false);
    };

    fetchData();
  }, [page]);

  return (
    <div className="p-4 bg-base-200">
      <Link to={"/new-task"} className="btn btn-info mb-3">
        <PlusIcon className="h-5 w-5" />
        任務
      </Link>
      <div className="grid gap-3">
        {tasks.map((task, index) => {
          const isObservedLast = tasks.length === index + 1;
          const {
            id,
            repository: {
              name: repo,
              owner: { login: owner },
            },
            number,
          } = task;
          return (
            <Link
              key={id}
              to={`/task/${id}?owner=${owner}&repo=${repo}&number=${number}`}
            >
              <Task
                key={id}
                task={task}
                ref={isObservedLast ? lastTaskElement : null}
              />
            </Link>
          );
        })}
      </div>
      {isLoading && <Spinner />}
      {!hasMore && <div>No More Tasks!</div>}
    </div>
  );
}
