import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from "./Modal";
import { useState } from "react";

const PostsList = ({ modalVisability, modalToggle }) => {
  const [postList, setPostList] = useState([
    {
      author: "Tyler",
      body: "React.js is the best!",
    },
    {
      author: "Alex",
      body: "This React.js course is a life save!",
    },
  ]);

  let modalContent;

  if (modalVisability) {
    modalContent = (
      <Modal onClose={modalToggle}>
        <NewPost postList={postList} setPostList={setPostList} />
      </Modal>
    );
  }
  return (
    <>
      {modalContent}
      <ul className={classes.post__list}>
        {postList.map((post, index) => {
          return <Post author={post.author} body={post.body} key={index} />;
        })}
      </ul>
    </>
  );
};

export default PostsList;
