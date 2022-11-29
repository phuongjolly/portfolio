import useSWR from "swr";
import "./Showcase.css";
import WrapList from "../common/WrapList";
import ItemBox from "../common/ItemBox";

export default function Showcase() {
  const { data } = useSWR("/posts", { suspense: true });

  return (
    <WrapList className={"page-container"}>
      {data.map((post) => (
        <ItemBox data={{ ...post, date: "Nov 23", minRead: 5, comment: 5 }} />
      ))}
    </WrapList>
  );
}
