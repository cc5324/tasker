import {
  PencilSquareIcon,
  TrashIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";

export default function Task({
  state,
  title,
  body,
  avatar,
  url,
  created_at,
  updated_at,
}) {
  return (
    <div className="flex rounded-lg h-full bg-white p-8 flex-col">
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
          <a href={url}>title: {title}</a>
        </h2>
      </div>
      <div className="flex-grow text-left">
        <p className="text-xs">Created At: {created_at}</p>
        <p className="text-xs">Updated At: {updated_at}</p>
        <p className="leading-relaxed text-base">body: {body}</p>
      </div>

      <div className="w-fit outline outline-gray-200 rounded-md ">
        <button className="flex w-full px-3 py-2 text-gray-600 hover:bg-slate-100">
          <PencilSquareIcon className="h-5 w-5 " />
          Edit
        </button>
        <button className="flex w-full px-3 py-2 text-red-400 hover:bg-slate-100">
          <TrashIcon className="h-5 w-5" />
          Delete
        </button>
      </div>
    </div>

    // <div className="bg-white rounded-md p-5 ">
    //   <div className="bg-gray-300 rounded-md w-fit px-2 py-1 mb-2">Open</div>
    //   <div className="text-left p-1 ">
    //     <div className="font-bold flex items-center gap-2">
    //       <div className="rounded-full bg-purple-600 aspect-square w-[30px] flex justify-center items-center">
    //         <span>A</span>
    //       </div>
    //       <div>Title</div>
    //     </div>
    //     <p className="p-2">
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
    //       reiciendis molestias necessitatibus corporis ratione distinctio non
    //       odit deserunt natus quisquam?
    //     </p>
    //   </div>
    //   <div>
    //     <button>Edit</button>
    //     <button>Delete</button>
    //   </div>
    // </div>
  );
}
