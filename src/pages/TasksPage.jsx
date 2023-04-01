import { useState, useEffect, useRef, useCallback } from "react";
import { useSearchParams, useLoaderData, Link } from "react-router-dom";

import { GithubAPI } from "@/API";
import { useTaskStore } from "@/stores/taskStore";

import {
  PlusIcon,
  ArrowDownIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
import Task from "@/component/TaskItem";
import Spinner from "@/component/SpinnerItem.jsx";

export default function main() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const [queryParams, setQueryParams] = useState({
    filter: "assigned",
    state: "open",
    per_page: 10,
    page: 1,
    sort: "created",
    direction: "desc",
    labels: "open",
  });

  const observe = useRef();
  const lastTaskElement = useCallback(
    (node) => {
      if (isLoading || !hasMore) return;
      if (observe.current) observe.current.disconnect();
      observe.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          // setPage((prevPage) => prevPage + 1);
          setQueryParams((prev) => {
            return {
              ...prev,
              page: prev.page + 1,
            };
          });
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
        params: queryParams,
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
  }, [queryParams]);

  const stateOptions = useTaskStore((state) => state.stateOptions);

  return (
    <div className="p-4 bg-base-200">
      <div className="flex items-center justify-between mb-4">
        <Link to={"/new-task"} className="btn btn-info">
          <PlusIcon className="h-5 w-5" />
          Task
        </Link>
        <div className="flex justify-end">
          <select
            className="select select-bordered w-full max-w-xs"
            value={queryParams.labels}
            onChange={(e) => {
              setTasks([]);
              setHasMore(true);
              setQueryParams({
                ...queryParams,
                page: 1,
                labels: e.target.value,
              });
            }}
          >
            {stateOptions.map((option) => (
              <option key={option.id} value={option.value}>
                {option.value}
              </option>
            ))}
          </select>
          <label className="swap swap-rotate p-2">
            <input
              type="checkbox"
              onChange={(event) => {
                const swapState = (checked) => (checked ? "asc" : "desc");
                setTasks([]);
                setHasMore(true);
                setQueryParams({
                  ...queryParams,
                  page: 1,
                  direction: swapState(event.target.checked),
                });
              }}
            />
            <ArrowDownIcon
              className="swap-off fill-current w-5 h-5"
              data-direction="desc"
            />
            <ArrowUpIcon
              className="swap-on fill-current w-5 h-5"
              data-direction="asc"
            />
          </label>
        </div>
      </div>
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
      {!hasMore && (
        <div className="mt-5 text-center text-xl">
          <span className="mr-4">No More Tasks!</span>
          <button
            className="btn btn-primary"
            onClick={() => window.scrollTo(0, 0)}
          >
            TOP
          </button>
        </div>
      )}
    </div>
  );
}
