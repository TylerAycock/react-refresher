
import Post from "./Post";
import classes from "./PostsList.module.css";

import { useState, useEffect } from "react";

const PostsList = () => {
  //this is used for creating a loading state
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const res = await fetch("http://localhost:8080/posts");
      const resData = await res.json();
      if (!res.ok) {
        console.log("error loading posts");
      }
      setPosts(resData.posts);
      setIsFetching(false);
    }
    fetchPosts();
  }, []);

  const [posts, setPosts] = useState([]);

  const addPostHandler = (postData) => {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((existingPosts) => [...existingPosts, postData]);
  };



  return (
    <>
      {!isFetching && posts.length > 0 && (
        <ul className={classes.post__list}>
          {posts.map((post, index) => {
            return <Post post={post} key={index} />;
          })}
        </ul>
      )}
      {!isFetching && posts.length === 0 && (
        <div className={classes.empty}>
          <h2>There are no posts yet.</h2>
          <p>Start Adding some!</p>
        </div>
      )}
      {isFetching && (
        <div className={classes.loading}>
          <p>Loading Posts...</p>
        </div>
      )}
    </>
  );
};

export default PostsList;
