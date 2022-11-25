import { Link } from "react-router-dom";
import useSWR from "swr";
import "./Home.css";

export default function Home() {
  const { data } = useSWR("/posts", { suspense: true });

  return (
    <div className={"page-container"}>
      {data.map((post) => (
        <div className="item-box" key={post._id}>
          <Link to={`/posts/${post._id}`}>
            <img className={"w-full"} src={post.avatar} alt="myBlog" />
          </Link>

          <div className="info-content">
            <div className="info-header">{post.title}</div>
            <div className="info-detail">{post.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
