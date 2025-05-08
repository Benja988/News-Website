import React, { useEffect, useRef } from "react";
import ReactQuill from "react-quill-new";
import BlotFormatter from "quill-blot-formatter";
import "react-quill-new/dist/quill.snow.css";

const Editor = ({ onChange, initialText }) => {
  const quillRef = useRef(null);

  useEffect(() => {
    if (quillRef.current) {
      const editor = quillRef.current.getEditor();
      // Register the Blot Formatter
      editor.getModule("blotFormatter") || editor.registerModule("blotFormatter", BlotFormatter);

      // Handle text changes
      editor.on("text-change", (_, oldContents) => {
        const currentContents = editor.getContents();
        const diff = currentContents.diff(oldContents);
        onChange && onChange(editor.root.innerHTML, diff);
      });

      // Initialize with initial text if available
      if (initialText) {
        editor.root.innerHTML = initialText;
      }
    }
  }, [onChange, initialText]);

  const modules = {
    blotFormatter: {},
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "video"],
      [{ align: [] }, { color: [] }],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
    "align",
    "color",
  ];

  return (
    <ReactQuill
      ref={quillRef}
      modules={modules}
      formats={formats}
      theme="snow"
      placeholder="Write something amazing..."
    />
  );
};

export default Editor;
