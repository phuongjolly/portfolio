import useSWR from "swr";
import ItemBox from "../common/ItemBox";
import "./Home.css";
import WrapList from "../common/WrapList";

export default function LatestPosts() {
  const { data } = useSWR("/posts?limit=3", { suspense: true });

  return (
    <WrapList
      className={"flex flex-row justify-between gap-4 flex-wrap latest-posts"}
    >
      {data.map((item) => (
        <ItemBox data={{ ...item, date: "Nov 23", minRead: 5, comment: 5 }} />
      ))}
    </WrapList>
  );
}
