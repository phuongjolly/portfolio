import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";
import "./PostEditor.css";
import s3Uploader from "../common/UploadImage";

export default function PostEditor({ content, imageHandler, onChangeHandler }) {
  const editorRef = useRef();

  const imageUploadHandler = async (blobInfo) => {
    const file = blobInfo.blob();
    const key = blobInfo.filename();
    const url = await s3Uploader(file, key, file.type);
    imageHandler(url);
  };

  return (
    <>
      <Editor
        ref={editorRef}
        apiKey="9c7p72hz4olsnke82uaqvgdj64yya4zzv138ub7j6tn7itve"
        onEditorChange={(newValue, editor) => {
          onChangeHandler(newValue);
        }}
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={content}
        value={content}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "link | " +
            "image | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          images_upload_handler: imageUploadHandler,
        }}
      />
    </>
  );
}
