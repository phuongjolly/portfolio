import useSWR from "swr";
import { Button } from "flowbite-react";
import "./Showcase.css";
import WrapList from "../common/WrapList";
import ItemBox from "../common/ItemBox";
import { useCurrentUser } from "../UserContext";
import { Link } from "react-router-dom";
import Item from "../common/Item";

export default function Showcase() {
  const { data } = useSWR("/api/posts", { suspense: true });
  const currentUser = useCurrentUser();

  return (
    <div className={"flex flex-col gap-2 py-5 md:py-8"}>
      {data.map((item, id) => (
        <Item key={item._id} data={item} index={id} />
      ))}
      {currentUser && (
        <Link to={"/showcase/add"} color={"default"}>
          Add New Post
        </Link>
      )}
    </div>
  );
}
