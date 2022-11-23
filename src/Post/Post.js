import { Link } from "react-router-dom";
import "./Post.css";

export default function Post() {
  //const { data } =  useSWR("");
  const data = {
    id: 0,
    avatarUrl:
      "https://dr9wvh6oz7mzp.cloudfront.net/i/c6800d9fa1e70422cf2519bcecc546a5_ra,w380,h380_pa,w380,h380.jpg",
    title: "Hello world!",
    description: "Hello world to every one",
    content:
      "Hello world to every one Hello world to every one Hello world to every one Hello" +
      "world to every one Hello world to every oneHello world to every one Hello world to every one Hello world to" +
      "every one Hello world to every one Hello world to every one Hello world to Hello world" +
      "to every one Hello world to every one Hello world to every oneHello world" +
      "to every one every one Hello world to every one",
    tags: [
      {
        id: 0,
        name: "c++",
      },
      { id: 1, name: "nodejs" },
    ],
  };

  return (
    <div className="post">
      <div className="post-button">
        <button className="ui button">
          <Link to={`/posts/${data.id}/edit`}>Edit</Link>
        </button>
        <button className="ui button" onClick={() => {}}>
          Delete
        </button>
      </div>
      {data && (
        <>
          <h1 className="mb-5 flex flex-row justify-center text-2xl">
            {data.title}
          </h1>
          <p className="mb-5 flex flex-row justify-center text-gray-500">
            {data.description}
          </p>
          <div className={"mb-5 flex flex-col"}>
            <p>{data.content}</p>
          </div>
          <div className="flex flex-row gap-4 items-center mt-4">
            <label>Tags: </label>
            {data.tags.map((tag) => (
              <div key={tag.id}>
                <Link to={`/posts/tags/${tag.name}`}>
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
