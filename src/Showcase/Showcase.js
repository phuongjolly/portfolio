import useSWR from "swr";
import { Button } from "flowbite-react";
import "./Showcase.css";
import WrapList from "../common/WrapList";
import ItemBox from "../common/ItemBox";
import { useCurrentUser } from "../UserContext";
import { Link } from "react-router-dom";

export default function Showcase() {
  const { data } = useSWR("/api/posts", { suspense: true });
  const currentUser = useCurrentUser();

  return (
    <WrapList className={"page-container"}>
      {data.map((post) => (
        <ItemBox
          key={post._id}
          data={{ ...post, date: "Nov 23", minRead: 5, comment: 5 }}
        />
      ))}
      {currentUser && (
        <Link to={"/showcase/add"} color={"default"}>
          Add New Post
        </Link>
      )}
    </WrapList>
  );
}
