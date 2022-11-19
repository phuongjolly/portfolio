import { Link } from "react-router-dom";
import { Suspense } from "react";
import "./Home.css";

export default function Home() {
  function Posts() {
    //const { data } = useSWR("");
    const data = [
      {
        id: 0,
        avatarUrl:
          "https://dr9wvh6oz7mzp.cloudfront.net/i/c6800d9fa1e70422cf2519bcecc546a5_ra,w380,h380_pa,w380,h380.jpg",
        title: "Hello world!",
        description: "Hello world to every one",
      },
    ];

    return (
      <div className={"page-container"}>
        {data.map((post) => (
          <div className="item-box" key={post.id}>
            <div className="photo">
              <Link to={`/posts/${post.id}`}>
                <img src={post.avatarUrl} alt="myBlog" />
              </Link>
            </div>
            <div className="info-content">
              <div className="info-header">{post.title}</div>
              <div className="info-detail">{post.description}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <Suspense fallback={<div>loading...</div>}>
        <Posts />
      </Suspense>
    </>
  );
}
