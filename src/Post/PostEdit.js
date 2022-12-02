import { useEffect, useState } from "react";
import { Button } from "flowbite-react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import useSWR from "swr";
import PostEditor from "./PostEditor";
import PostAvatar from "./PostAvatar";
import "./PostEdit.css";

export default function PostEdit() {
  const navigate = useNavigate();
  const [showErrorDialog, setShowErrorDialog] = useState(false);
  const { id } = useParams();
  const { pathname } = useLocation();
  const type = pathname.split("/")[2];
  const { data } = useSWR(type === "edit" ? `/api/posts/${id}` : null, {
    suspense: true,
    revalidateOnFocus: false,
  });

  const [post, setPost] = useState({
    title: "",
    description: "",
    avatar: "",
    content: "",
  });

  useEffect(() => {
    if (type === "edit") {
      setPost(data);
    }
  }, []);

  const onChange = (value, type) => {
    setPost({ ...post, [type]: value });
  };

  const onSave = async () => {
    let info = {
      url: type === "edit" ? `/api/posts/${id}` : `/api/posts`,
      method: type === "edit" ? "PUT" : "POST",
    };

    const response = await fetch(info.url, {
      method: info.method,
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const newPost = await response.json();

    if (response) {
      navigate(`/showcase/${newPost._id}`);
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
