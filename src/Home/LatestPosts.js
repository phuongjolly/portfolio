import useSWR from "swr";
import { Carousel } from "flowbite-react";
import "./Home.css";
import { Link } from "react-router-dom";
import Item from "../common/Item";

export default function LatestPosts() {
  const { data } = useSWR("/api/posts", { suspense: true });

  return (
    <div className={"latest-post flex flex-col"}>
      <div className={"flex flex-col md:flex-row justify-between"}>
        <div className={"text-2xl font-semibold"}>Latest demos</div>
        <Link
          to={"/showcase"}
          className={"text-base font-semibold cursor-pointer"}
        >
          See all demos
        </Link>
      </div>
      <div className="h-64 px-4 py-8 md:px-14">
        <Carousel slide={true}>
          {data.map((item, id) => (
            <Item key={item._id} data={item} index={id} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
