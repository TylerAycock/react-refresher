import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from "./Modal";
import { useState } from "react";

const PostsList = ({ modalVisability, modalToggle }) => {
  const [posts, setPosts] = useState([]);

  const addPostHandler = (postData) => {
    setPosts((existingPosts) => [...existingPosts, postData]);
  };

  let modalContent;

  if (modalVisability) {
    modalContent = (
      <Modal onClose={modalToggle}>
        <NewPost onAddPost={addPostHandler} onCancel={modalToggle} />
      </Modal>
    );
  }
  return (
    <>
      {modalContent}
      {posts.length > 0 && (
        <ul className={classes.post__list}>
          {posts.map((post, index) => {
            return <Post post={post} key={index} />;
          })}
        </ul>
      )}
      {posts.length === 0 && (
        <div className={classes.empty}>
          <h2>There are no posts yet</h2>
          <p>Start Adding some!</p>
        </div>
      )}
    </>
  );
};

export default PostsList;
