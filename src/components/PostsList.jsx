import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from "./Modal";
import { useState } from "react";

const PostsList = ({ modalVisability, modalToggle }) => {
  const [posts, setPosts] = useState([
    {
      author: "Tyler",
      body: "React.js is the best!",
    },
    {
      author: "Alex",
      body: "This React.js course is a life save!",
    },
  ]);

  const addPostHandler = (postData) => {
    setPosts([...posts, postData]);
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
      <ul className={classes.post__list}>
        {posts.map((post, index) => {
          return (
            <Post
              author={post.author}
              body={post.body}
              key={index}
              onCancel={modalToggle}
            />
          );
        })}
      </ul>
    </>
  );
};

export default PostsList;
