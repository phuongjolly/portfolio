import { useState } from "react";

export default function PostTagsEditor({ tags, onChange }) {
  const [value, setValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onChange([...tags, value]);
    setValue("");
  };

  return (
    <div className="flex flex-col gap-2">
      <label>Tags: </label>
      <form
        className="flex flex-row gap-2 justify-start"
        onSubmit={(e) => onSubmit(e)}
      >
        {tags.length > 0 && tags.map((tag) => <button key={tag}>{tag}</button>)}
        <input
          className={"p-2"}
          type="text"
          placeholder="tag"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </form>
    </div>
  );
}
