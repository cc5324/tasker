import { useState } from "react";
import {
  useLoaderData,
  useNavigate,
  useSearchParams,
  Form,
  redirect,
} from "react-router-dom";

import { GithubAPI } from "@/API";

export default function EditTask() {
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  // const { title, body, user, created_at, updated_at, url, id, labels } =
  //   useLoaderData();
  const task = useLoaderData();
  // console.log(`task`, task);

  const currentState = task.labels[0]?.name ?? "Open";

  const [state, setState] = useState(currentState);
  const [title, setTitle] = useState(task.title);
  const [body, setBody] = useState(task.body);

  function handleClick(event, value) {
    event.stopPropagation();
    const elem = document.activeElement;
    elem?.blur();
    setState(value);
  }

  async function handleSubmit(event) {
    console.log(`handleSubmit`, event);
    event.preventDefault();
    const form = new FormData(event.target);

    const { title, body, state } = Object.fromEntries(form.entries());

    const { owner, repo, number } = Object.fromEntries(searchParams.entries());

    try {
      const response = await GithubAPI.PATCH(
        `/repos/${owner}/${repo}/issues/${number}`,
        { title, body, labels: [state] }
      );
      console.log(`res`, response);
      // redirect(`/task/:${task.id}`, { replace: true });
      navigate(
        `/task/:${task.id}?owner=${owner}&repo=${repo}&number=${number}`,
        { replace: true }
      );
    } catch (error) {
      console.log(error);
      // redirect("/tasks", { replace: true });
      navigate("/tasks", { replace: true });
    }
  }

  return (
    <div className=" bg-white p-8">
      <form method="post" onSubmit={handleSubmit}>
        <div className="dropdown dropdown-right">
          <label tabIndex={0} className="btn m-1 rounded-lg">
            {state}
            <input
              type="text"
              placeholder="Type here"
              className="input input-ghost w-full max-w-xs hidden"
              name="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={(event) => handleClick(event, "Open")}>
              <a>Open</a>
            </li>
            <li onClick={(event) => handleClick(event, "In Progress")}>
              <a>In Progress</a>
            </li>
            <li onClick={(event) => handleClick(event, "Done")}>
              <a>Done</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center mb-3">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label className="label">
              <span className="label-text-alt">Error hint</span>
            </label>
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your bio</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Bio"
            rows="7"
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <label className="label">
            <span className="label-text-alt">Error hint</span>
          </label>
        </div>
        <div>
          <button className="btn btn-info mr-2" type="submit">
            Save
          </button>
          <button className="btn btn-error" onClick={() => navigate("/tasks")}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
