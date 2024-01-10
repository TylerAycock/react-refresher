import classes from "./NewPost.module.css";
import { useState } from "react";

const NewPost = ({ postList, setPostList }) => {
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setPostList([
      ...postList,
      {
        author: author,
        body: body,
      },
    ]);
    console.log(postList);
  };

  return (
    <>
      <form className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea
            id="body"
            rows={3}
            required
            onChange={(e) => setBody(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="name">Your Name</label>
          <textarea
            id="name"
            required
            onChange={(e) => setAuthor(e.target.value)}
          ></textarea>
        </p>
      </form>
      <div className={classes.actions}>
        <button onClick={submitHandler}>Add new Post</button>
      </div>
    </>
  );
};

export default NewPost;
