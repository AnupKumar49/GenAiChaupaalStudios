import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './description.css'

const Description = ({ title, content }) => {
  const modules = {
    toolbar: false, // Disable the toolbar
  };

  return (
    <div className="description responsive-description">
    <h2 className="title">
      {title}
    </h2>
    <ReactQuill
      value={content}
      readOnly={true}
      theme="snow"
      modules={modules}
    />
  </div>
  );
};

export default Description;
