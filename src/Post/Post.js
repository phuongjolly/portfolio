import { Link, useNavigate, useParams } from "react-router-dom";
import useSWR from "swr";
import parse from "html-react-parser";
import "./Post.css";
import { useCurrentUser } from "../UserContext";
import PostButtonControl from "./PostButtonControl";

export default function Post() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useSWR(`/api/posts/${id}`, { suspense: true });
  const currentUser = useCurrentUser();

  const onDelete = async () => {
    const response = await fetch(`/api/posts/${id}`, { method: "DELETE" });
    if (response) {
      navigate("/showcase");
    }
  };

  return (
    <div className="post">
      {currentUser && (
        <PostButtonControl
          show={Object.keys(currentUser).length !== 0}
          id={data._id}
          onDelete={onDelete}
        />
      )}
      {data && (
        <article>
          <div
            className={
              "flex flex-col items-center justify-end relative h-40 md:h-80 max-h-80"
            }
            style={{
              backgroundImage: `url(${data.avatar})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            &nbsp;
          </div>
          <article className={"flex flex-col p-5"}>
            <h1 className="mb-5 flex flex-row justify-center text-2xl">
              {data.title}
            </h1>
            <p className="mb-5 flex flex-row justify-center text-gray-500">
              {data.description}
            </p>
          </article>
          <div className={"py-10 px-0  md:px-32"}>
            <article className={"mb-5 flex flex-col"}>
              {parse(data.content)}
            </article>
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
          </div>
        </article>
      )}
      <div className="flex justify-between w-full mt-4">
        <a className="hover:cursor-pointer">Previous Page</a>
        <a className="hover:cursor-pointer">Next Page</a>
      </div>
    </div>
  );
}
