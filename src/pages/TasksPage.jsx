import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";

import { GithubAPI } from "@/API";
import { getInfoByIssueURL } from "@/share/utils/url-parser.js";
import { useUserStore } from "@/stores/userStore";

import { stateOptions } from "@/assets/configure";

import {
  PlusIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Task from "@/component/TaskItem";
import Spinner from "@/component/SpinnerItem.jsx";

export default function main() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  const username = useUserStore((state) => state.account);
  console.log(`user`, username);
  const [queryString, setQueryString] = useState("");
  const [queryParams, setQueryParams] = useState({
    sort: "created",
    order: "desc",
    per_page: 10,
    page: 1,
    assignee: username,
    state: "open",
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

      const { assignee, state, labels, ...params } = queryParams;
      const response = await GithubAPI.GET("/search/issues", {
        params: {
          q: `${queryString} state:${state} assignee:${username} label:${labels}`,
          ...params,
        },
        headers: {
          Accept: "application/vnd.github+json",
        },
      });
      console.log(response);

      const newTasks = response.items;
      if (newTasks.length === 0) {
        setHasMore(false);
      } else {
        setTasks((prevTasks) => {
          return [...prevTasks, ...newTasks];
        });
      }
      setIsLoading(false);
    };

    fetchData();
  }, [queryParams]);

  return (
    <div className="p-4 md:p-8 lg:p-12 bg-base-200">
      <div className="flex items-center flex-wrap sm:flex-nowrap justify-center sm:justify-between gap-3 sm:gap-0 mb-4">
        <Link to={"/new-task"} className="btn btn-primary">
          <PlusIcon className="h-5 w-5" />
          Task
        </Link>
        <div className="flex justify-end">
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
          <select
            className="select select-bordered max-w-[100px] sm:max-w-xs"
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
          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search…"
                className="input input-bordered max-w-[160px] sm:max-w-xs"
                value={queryString}
                onChange={(e) => setQueryString(e.target.value)}
              />
              <button
                className="btn btn-square"
                onClick={() => {
                  setTasks([]);
                  setHasMore(true);
                  setQueryParams({ ...queryParams, page: 1 });
                }}
              >
                <MagnifyingGlassIcon className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-3">
        {tasks.map((task, index) => {
          const isObservedLast = tasks.length === index + 1;
          const { id, url } = task;
          const { owner, repo, issue_number } = getInfoByIssueURL(url);
          return (
            <Link
              key={id}
              to={`/task/${id}?owner=${owner}&repo=${repo}&number=${issue_number}`}
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
