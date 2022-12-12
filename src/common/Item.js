import { Link } from "react-router-dom";

export default function Item({ data }) {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <Link to={`/showcase/${data._id}`}>
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src={data.avatar}
              alt="Modern building architecture"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {data.title}
            </div>
            <p className="mt-2 text-slate-500">{data.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
