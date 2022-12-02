import { Link } from "react-router-dom";
import "./ItemBox.css";

export default function ItemBox({ data }) {
  return (
    <div className="item-box flex flex-col justify-between" key={data._id}>
      <Link to={`/showcase/${data._id}`}>
        <img className={"w-full"} src={data.avatar} alt="myBlog" />
      </Link>
      <div className={"flex flex-col justify-between h-full"}>
        <div className="font-semibold text-2xl">{data.title}</div>
        <div className={"flex flex-row justify-between items-center"}>
          <ul className={"flex flex-row gap-4 text-base font-semibold"}>
            <li>{data.date}</li>
            <li>{data.minRead} minutes read</li>
          </ul>
          <div>{data.comment} comments</div>
        </div>
      </div>
    </div>
  );
}
