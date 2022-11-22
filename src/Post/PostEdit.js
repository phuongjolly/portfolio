import { useState } from "react";
import PostEditor from "./PostEditor";

export default function PostEdit() {
  const [post, setPost] = useState({
    id: 0,
    title: "",
    description: "",
    images: [],
    content: "",
  });

  return <PostEditor />;
}
