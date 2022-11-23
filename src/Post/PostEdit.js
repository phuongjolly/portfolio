import { useState } from "react";
import PostEditor from "./PostEditor";
import PostTagsEditor from "./PostTagsEditor";
import PostAvatar from "./PostAvatar";
import "./PostEdit.css";
import { Button } from "flowbite-react";

export default function PostEdit() {
  const [post, setPost] = useState({
    id: 0,
    title: "",
    description: "",
    avatar: "",
    images: [],
    content: "",
    tags: ["welcome", "be good"],
  });

  const onChange = (value, type) => {
    setPost({ ...post, [type]: value });
  };

  return (
    <div className="post-edit">
      <div className="ui fluid input post-title">
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => onChange(e.target.value, "title")}
          value={post.title}
        />
      </div>
      <div className="ui fluid input post-description">
        <input
          type="text"
          placeholder="Description"
          onChange={(e) => onChange(e.target.value, "description")}
          value={post.description}
        />
      </div>
      <PostAvatar url={null} />
      <PostEditor />
      <PostTagsEditor
        tags={post.tags}
        onChange={(value) => onChange(value, "tags")}
      />
      <div className="flex flex-row justify-center gap-4">
        <Button color="light" onClick={() => {}}>
          Discard
        </Button>
        <Button onClick={() => {}}>Save</Button>
      </div>
    </div>
  );
}
