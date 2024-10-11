"use client"
import { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

const toolbarOptions = [
  [{ 'header': [1, 2, 3, 4, false] }],
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  [{ 'list': 'ordered' }, { 'list': 'bullet' }],
  ['link'],
  ['clean'],
  [{ 'color': [] }]                                     // remove formatting button
];

const modules = {
  toolbar: toolbarOptions
};


export default function TextEditor() {
  const [content, setContent] = useState('');
  return (
    <div className="w-full text-editor flex flex-col items-center justify-center gap-4 ">
      <ReactQuill theme="snow" value={content} onChange={data => setContent(data)} className="w-[98%] max-w-[600px] *:w-full rounded-lg overflow-hidden shadow-[0_0_1px_gray_inset]" modules={modules} />
      <div className="w-[98%] overflow-auto whitespace-pre-wrap">{content}</div>
      <div dangerouslySetInnerHTML={{ __html: content }} className="w-[98%] max-w-[600px] *:rounded-md *:overflow-hidden *:w-fit *:h-fit shadow-[0_0_2px_blue_inset] p-4 whitespace-pre-wrap" style={{ height: '100%' }} />
    </div>
  )
}
