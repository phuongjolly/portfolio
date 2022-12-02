import { Link, useParams } from "react-router-dom";
import useSWR from "swr";
import parse from "html-react-parser";
import "./Post.css";
import { useCurrentUser } from "../UserContext";

export default function Post() {
  const { id } = useParams();
  const { data } = useSWR(`/api/posts/${id}`, { suspense: true });
  const currentUser = useCurrentUser();

  return (
    <div className="post">
      {currentUser && (
        <div className="post-button">
          <button className="ui button">
            <Link to={`/showcase/${data._id}/edit`}>Edit</Link>
          </button>
          <button className="ui button" onClick={() => {}}>
            Delete
          </button>
        </div>
      )}
      {data && (
        <>
          <h1 className="mb-5 flex flex-row justify-center text-2xl">
            {data.title}
          </h1>
          <p className="mb-5 flex flex-row justify-center text-gray-500">
            {data.description}
          </p>
          <div className={"mb-5 flex flex-col"}>{parse(data.content)}</div>
          <div className="flex flex-row gap-4 items-center mt-4">
            <label>Tags: </label>
            {data.tags &&
              data.tags.map((tag) => (
                <div key={tag.id}>
                  <Link to={`/showcase/tags/${tag.name}`}>
                    <div className="item">#{tag.name}</div>
                  </Link>
                </div>
              ))}
          </div>
        </>
      )}
      <div className="flex justify-between w-full mt-4">
        <a className="hover:cursor-pointer">Previous Page</a>
        <a className="hover:cursor-pointer">Next Page</a>
      </div>
    </div>
  );
}
