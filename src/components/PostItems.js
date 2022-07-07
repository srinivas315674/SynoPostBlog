import React from "react";
import Blog from "./Blog";

function PostItems({
  title,
  id,
  author,
  createdAt,
  url,
  text,
  type,
  themeStyle,
}) {
  return (
    <>
      <div>
        {themeStyle ? (
          <div className="container ">
            <div
              className="card border-primary mb-3"
              style={{ maxWidth: "70rem" }}
            >
              <div className="card-header">
                {author.charAt(0).toUpperCase() + author.slice(1)}
              </div>
              <div className="card-body text-primary">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <p className="card-text">{createdAt}</p>
                <Blog url={url} />
              </div>
            </div>
          </div>
        ) : (
          <div className="container bg-dark">
            <div
              className="card  border-secondary mb-3 bg-dark"
              style={{ maxWidth: "70rem" }}
            >
              <div
                className="card-header "
                style={{ color: "white", border: "1px solid gray" }}
              >
                {author.charAt(0).toUpperCase() + author.slice(1)}
              </div>
              <div className="card-body" style={{ color: "white" }}>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <p className="card-text">{createdAt}</p>
                <Blog url={url} />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default PostItems;
