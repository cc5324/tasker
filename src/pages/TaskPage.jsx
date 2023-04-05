import {
  useNavigate,
  useLoaderData,
  redirect,
  useSearchParams,
  useLocation,
} from "react-router-dom";

import {
  PencilSquareIcon,
  TrashIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";

import { GithubAPI } from "@/API";

import { getSearchParams } from "@/share/utils/urlHelper";

export async function loader({ request }) {
  const { params } = getSearchParams(request.url);

  try {
    const response = await GithubAPI.GET(
      `/repos/${params.owner}/${params.repo}/issues/${params.number}`
    );
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return redirect("/");
  }
}

export default function taskPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const { state, title, body, user, created_at, updated_at, url, id } =
    useLoaderData();

  const [searchParams, setParams] = useSearchParams();
  const { owner, repo, issue_number } = Object.fromEntries(
    searchParams.entries()
  );

  async function deleteTask({ owner, repo, issue_number }) {
    try {
      const response = await GithubAPI.PATCH(
        `/repos/${owner}/${repo}/issues/${issue_number}`,
        { state: "closed" }
      );
    } catch (error) {
      console.log(error);
    } finally {
      navigate("/");
    }
  }

  return (
    <div className="p-8">
      <div className="text-left">
        <button className="btn" onClick={() => navigate("/")}>
          回列表
        </button>
      </div>
      <div className="flex rounded-lg max-h-84 bg-white flex-col mt-4">
        <div className="flex justify-between items-center">
          <div className="bg-gray-300 rounded-md w-fit px-2 py-1 mb-3">
            <span> {state}</span>
          </div>
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn bg-transparent hover:bg-base-200 border-none m-1"
            >
              <EllipsisVerticalIcon className="h-5 w-5 text-gray-400"></EllipsisVerticalIcon>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu w-52 p-2 shadow bg-base-100 outline outline-base-200 outline-1 rounded-box text-left"
            >
              <button
                className="flex w-full px-4 py-3 text-gray-600 hover:bg-base-200 rounded-lg"
                onClick={() =>
                  navigate({
                    pathname: `/task/${id}/edit`,
                    search: location.search,
                    // search: `?owner=${owner}&repo=${repo}&number=${issue_number}`,
                  })
                }
              >
                <PencilSquareIcon className="h-5 w-5 " />
                Edit
              </button>
              <button
                className="flex w-full px-4 py-3 text-red-400 hover:bg-base-200 rounded-lg"
                onClick={() => {
                  const yes = confirm("是否確定刪除？");
                  if (yes) deleteTask({ owner, repo, issue_number });
                }}
              >
                <TrashIcon className="h-5 w-5" />
                Delete
              </button>
            </ul>
          </div>
        </div>
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full  text-white flex-shrink-0">
            <img src={user?.avatar_url} alt="user avatar" />
          </div>
          <h2 className="text-gray-900 text-lg title-font font-medium">
            <span>Title: {title}</span>
          </h2>
        </div>
        <div className="flex-grow overflow-hidden p-1">
          <p className="text-right text-xs">
            Created At: {created_at.split("T")[0]}
          </p>
          <p className="text-right text-xs">
            Updated At: {updated_at.split("T")[0]}
          </p>
          <p className="text-left text-base line-clamp-3">Body: {body}</p>
        </div>
      </div>
      <div className="flex gap-3 justify-center mt-4">
        <button
          className="btn btn-secondary flex"
          onClick={() => {
            const yes = confirm("是否確定刪除？");
            if (yes) deleteTask({ owner, repo, issue_number });
          }}
        >
          <TrashIcon className="h-5 w-5" />
          Delete
        </button>
        <button
          className="btn btn-primary flex"
          onClick={() =>
            navigate({
              pathname: `/task/${id}/edit`,
              search: location.search,
              // search: `?owner=${owner}&repo=${repo}&number=${issue_number}`,
            })
          }
        >
          <PencilSquareIcon className="h-5 w-5 " />
          Edit
        </button>
      </div>
    </div>
  );
}
