import "./PostAvatar.css";
import { useRef, useState } from "react";
import s3Uploader, { readFile } from "../common/UploadImage";

const defaultAvatarURL =
  "https://phuongjolly-portfolio.s3.amazonaws.com/default-avatar.jpg";
export default function PostAvatar({ url, handler }) {
  const [fileData, setFileData] = useState({
    name: "",
    type: "",
    url: url || defaultAvatarURL,
    data: null,
  });

  const fileInput = useRef();

  const onChange = async (e) => {
    e.preventDefault();
    const target = e.target;
    if (target.files && target.files.length > 0) {
      await readFile(target.files[0], setFileData);

      const response = await s3Uploader(
        target.files[0],
        target.files[0].name,
        target.files[0].type
      );

      handler(response);
    }
  };

  const onDrop = async (e) => {
    e.preventDefault();

    const dataTransfer = e.dataTransfer;
    if (dataTransfer.files.length > 0) {
      const droppedFile = dataTransfer.files[0];
      fileInput.current.files = dataTransfer.files;
      await readFile(droppedFile, setFileData);

      const response = await s3Uploader(
        droppedFile,
        droppedFile.name,
        droppedFile.type
      );

      handler(response);
    }
  };

  return (
    <form
      className="relative"
      onDrop={onDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <img src={fileData.url} alt={""} className={"w-40"} />
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
