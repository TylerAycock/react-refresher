import Post from "./Post";
import classes from "./PostsList.module.css";
import { useLoaderData } from "react-router-dom";

const PostsList = () => {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.post__list}>
          {posts.map((post, index) => {
            return <Post post={post} key={index} />;
          })}
        </ul>
      )}
      {posts.length === 0 && (
        <div className={classes.empty}>
          <h2>There are no posts yet.</h2>
          <p>Start Adding some!</p>
        </div>
      )}
    </>
  );
};

export default PostsList;
