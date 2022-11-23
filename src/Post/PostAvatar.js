import "./PostAvatar.css";
import { useState } from "react";

const defaultAvatarURL =
  "https://phuongjolly-portfolio.s3.amazonaws.com/default-avatar.jpg";
export default function PostAvatar({ url }) {
  const [file, setFile] = useState({
    name: "",
    type: "",
    url: url || defaultAvatarURL,
  });

  const onChange = (e) => {};

  return (
    <div className="relative">
      <img
        src="https://phuongjolly-portfolio.s3.amazonaws.com/default-avatar.jpg"
        alt={""}
      />
      <input type={"file"} hidden={true} id={"file"} onChange={onChange} />
      <div className="absolute flex flex-row top-1/2">
        <label htmlFor={"file"}>
          <strong>Upload avatar</strong>
        </label>
        <span>&nbsp; or drop and drag here</span>
      </div>
    </div>
  );
}
