import useSWR from "swr";
import ItemBox from "../common/ItemBox";
import "./Home.css";
import WrapList from "../common/WrapList";

export default function LatestPosts() {
  const { data } = useSWR("/posts?limit=3", { suspense: true });

  return (
    <div>
      <div className={"flex flex-row justify-between"}>
        <div className={"text-2xl font-semibold"}>Latest demos</div>
        <div className={"text-base font-semibold cursor-pointer"}>
          See all demos
        </div>
      </div>
      <WrapList
        className={"flex flex-row justify-between gap-4 flex-wrap latest-posts"}
      >
        {data.map((item) => (
          <ItemBox
            key={item.title}
            data={{ ...item, date: "Nov 23", minRead: 5, comment: 5 }}
          />
        ))}
      </WrapList>
    </div>
  );
}
