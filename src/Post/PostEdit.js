import { useEffect, useMemo, useState } from "react";
import PostEditor from "./PostEditor";
import PostAvatar from "./PostAvatar";
import "./PostEdit.css";
import { Button } from "flowbite-react";
import { useParams, useNavigate } from "react-router-dom";
import useSWR from "swr";

export default function PostEdit() {
  const navigate = useNavigate();
  const [showErrorDialog, setShowErrorDialog] = useState(false);
  const { id } = useParams();
  const { data } = useSWR(`/posts/${id}`, {
    suspense: true,
    revalidateOnFocus: false,
  });
  console.log("LOading post", data);
  const [post, setPost] = useState(null);

  useEffect(() => {
    setPost(data);
  }, []);

  const onChange = (value, type) => {
    setPost({ ...post, [type]: value });
  };

  const onSave = async () => {
    console.log("before save", post);
    const response = await fetch(`/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response) {
      navigate("/");
    } else {
      setShowErrorDialog(true);
    }
  };

  const onDiscard = () => {
    setPost(data);
  };

  if (!post) {
    return <div>loading...</div>;
  }

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
      <PostAvatar
        url={post.avatar}
        handler={(value) => onChange(value, "avatar")}
      />
      <PostEditor
        content={post.content}
        onChangeHandler={(value) => onChange(value, "content")}
      />
      <div className="flex flex-row justify-center gap-4">
        <Button color="light" onClick={onDiscard}>
          Discard
        </Button>
        <Button onClick={onSave}>Save</Button>
      </div>
    </div>
  );
}
