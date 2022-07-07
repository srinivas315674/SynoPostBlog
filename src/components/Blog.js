import React from "react";

function Blog({ url }) {
  return (
    <div className="d-inline-flex p-2  " >
      <iframe src={url}scrolling='yes' className="iframes"> </iframe>
    </div>
  );
}

export default Blog;
