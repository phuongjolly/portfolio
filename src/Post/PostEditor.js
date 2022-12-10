import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";
import "./PostEditor.css";

export default function PostEditor({ content, onChangeHandler }) {
  const editorRef = useRef();

  const imageUploadHandler = async (blobInfo) => {
    const file = blobInfo.blob();
    const key = blobInfo.filename();

    const generateResponse = await fetch("/api/image/generateUrl", {
      method: "POST",
    });

    const { signedUrl, originalUrl } = await generateResponse.json();

    const response = await fetch(`${signedUrl}`, {
      method: "PUT",
      body: file,
    });

    if (response) {
      return originalUrl;
    }
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
        value={content}
        init={{
          height: 500,
          menubar: false,
          selector: "textarea",
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
            "codesample",
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
            "code | " +
            "codesample |" +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          images_upload_handler: imageUploadHandler,
        }}
      />
    </>
  );
}
