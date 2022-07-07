import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import PostItems from "./PostItems";
const POST_QUERY = `query{
  firstPageArticles {
  id
  author
  createdAt
  score
  updatedAt
  title
  text
  type
  url
  }
  }`;
function PostList() {
  const [themeStyle, setThemeStyle] = useState(true);
  const [posts, setPosts] = useState([]);

  const endpoint = "http://gql-technical-assignment.herokuapp.com/graphql";
  useEffect(() => {
    fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: POST_QUERY }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setPosts(data.data.firstPageArticles);
      });
  }, []);
  const handleToggle = () => {
    setThemeStyle(!themeStyle);
  };

  return (
    <div style={{ backgroundColor: themeStyle ? "white" : "#343a40" }}>
      {themeStyle ? (
        <>
          <nav className="navbar navbar-dark bg-light ">
            <a className="navbar-brand">Syno Posts📝</a>
            <form className="form-inline">
              <button
                className="btn btn-outline-success my-2 my-sm-0 mr-3 ml-3"
                type="button"
              >
                <Link to="/">Home</Link>
              </button>
              <button
                className="btn btn-outline-success my-2 my-sm-0 mr-3 ml-3"
                type="button"
              >
                <Link to="/NewPost">NewPost</Link>
              </button>
              <button
                className="btn btn-outline-success my-2 my-sm-0 mr-3 ml-3"
                type="button"
                onClick={handleToggle}
              >
                Toggle
              </button>
            </form>
          </nav>
          <div>
            {posts.map((data) => (
              <div key={data.id}>
                <PostItems
                  title={data.title}
                  author={data.author}
                  url={data.url}
                  text={data.text}
                  id={data.id}
                  createdAt={data.createdAt}
                  type={data.type}
                  themeStyle={themeStyle}
                />
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand  nav_dark">Syno Posts📝</a>
            <form className="form-inline">
              <button
                className="btn btn-outline-success my-2 my-sm-0 mr-3 ml-3"
                type="button"
              >
                Home
              </button>
              <button
                className="btn btn-outline-success my-2 my-sm-0 mr-3 ml-3"
                type="button"
              >
                NewPost
              </button>
              <button
                className="btn btn-outline-success my-2 my-sm-0 mr-3 ml-3"
                type="button"
                onClick={handleToggle}
              >
                Toggle
              </button>
            </form>
          </nav>
          <div>
            {posts.map((data) => (
              <div key={data.id}>
                <PostItems
                  title={data.title}
                  author={data.author}
                  url={data.url}
                  text={data.text}
                  id={data.id}
                  createdAt={data.createdAt}
                  type={data.type}
                  themeStyle={themeStyle}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default PostList;
