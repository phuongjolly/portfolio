import { useEffect, useRef, useState } from "react";
import "./PostAvatar.css";
import { readFile } from "../common/UploadImage";

const defaultAvatarURL =
  "https://phuongjolly-portfolio.s3.amazonaws.com/default-avatar.jpg";
export default function PostAvatar({ postUrl, handler, onUpload }) {
  const [url, setUrl] = useState("");
  const fileInput = useRef();

  useEffect(() => {
    setUrl(postUrl || defaultAvatarURL);
  }, [postUrl]);

  const onChange = async (e) => {
    e.preventDefault();

    const target = e.target;

    if (target.files && target.files.length > 0) {
      await readFile(target.files[0], setUrl);

      const generatedUrl = await onUpload(target.files[0]);

      handler(generatedUrl);
    }
  };

  const onDrop = async (e) => {
    e.preventDefault();

    const dataTransfer = e.dataTransfer;

    if (dataTransfer.files.length > 0) {
      const droppedFile = dataTransfer.files[0];

      fileInput.current.files = dataTransfer.files;

      await readFile(droppedFile, setUrl);

      const generatedUrl = await onUpload(droppedFile);

      handler(generatedUrl);
    }
  };

  return (
    <form
      className="relative"
      onDrop={onDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <img src={url} alt={""} className={"w-40"} />
      <input
        type={"file"}
        hidden={true}
        id={"file"}
        onChange={onChange}
        ref={fileInput}
      />
      <div className="absolute flex flex-row top-1/2">
        <label htmlFor={"file"}>
          <strong>Upload avatar</strong>
        </label>
        <span>&nbsp; or drop and drag here</span>
      </div>
    </form>
  );
}
