import { forwardRef } from "react";

import {
  PencilSquareIcon,
  TrashIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";

export default forwardRef(function Task(
  { state, title, body, avatar, url, created_at, updated_at },
  ref
) {
  return (
    <div ref={ref} className="flex rounded-lg max-h-84 bg-white p-8 flex-col">
      <div className="flex justify-between">
        <div className="bg-gray-300 rounded-md w-fit px-2 py-1 mb-3">
          <span> {state}</span>
        </div>
        <EllipsisVerticalIcon className="h-5 w-5 text-gray-400"></EllipsisVerticalIcon>
      </div>
      <div className="flex items-center mb-3">
        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full  text-white flex-shrink-0">
          <img src={avatar} alt="user avatar" />
        </div>
        <h2 className="text-gray-900 text-lg title-font font-medium">
          <p>title: {title}</p>
        </h2>
      </div>
      <div className="flex-grow overflow-hidden">
        <p className="text-right text-xs">Created At: {created_at}</p>
        <p className="text-right text-xs">Updated At: {updated_at}</p>
        <p className="text-left text-base line-clamp-3">body: {body}</p>
      </div>

      {/* <div className="w-fit outline outline-gray-200 rounded-md ">
        <button className="flex w-full px-3 py-2 text-gray-600 hover:bg-slate-100">
          <PencilSquareIcon className="h-5 w-5 " />
          Edit
        </button>
        <button className="flex w-full px-3 py-2 text-red-400 hover:bg-slate-100">
          <TrashIcon className="h-5 w-5" />
          Delete
        </button>
      </div> */}
    </div>
  );
});
