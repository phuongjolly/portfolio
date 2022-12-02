import useSWR from "swr";
import { Carousel } from "flowbite-react";
import ItemBox from "../common/ItemBox";
import "./Home.css";
import { useMemo } from "react";
import { Link } from "react-router-dom";

export default function LatestPosts() {
  const { data } = useSWR("/api/posts", { suspense: true });
  const group = useMemo(() => {
    const arr = [];
    let count = -1;
    if (data) {
      data.map((value, id) => {
        if (id % 3 === 0) {
          arr[++count] = [];
        }
        arr[count].push(value);
      });
    }

    return arr;
  }, [data]);

  return (
    <div className={"flex flex-col mt-8 latest-posts"}>
      <div className={"flex flex-row justify-between"}>
        <div className={"text-2xl font-semibold"}>Latest demos</div>
        <Link
          to={"/showcase"}
          className={"text-base font-semibold cursor-pointer"}
        >
          See all demos
        </Link>
      </div>
      <div className="h-56 sm:h-96 xl:h-96 2xl:h-96">
        <Carousel slide={false}>
          {group.map((item, id) => (
            <div
              key={`item${id}`}
              className={"flex flex-row justify-between gap-4 p-5"}
            >
              {item.map((element) => (
                <ItemBox
                  key={element.title}
                  data={{ ...element, date: "Nov 23", minRead: 5, comment: 5 }}
                />
              ))}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
