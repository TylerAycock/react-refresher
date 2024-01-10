import classes from "./NewPost.module.css";
import { useState } from "react";

const NewPost = ({ postList, setPostList, onCancel }) => {
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
    // console.log(postList);
  };

  const clickHandler = () => {
    console.log("cancelbutton");
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
        <p className={classes.actions}>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" onClick={submitHandler}>
            Submit
          </button>
        </p>
      </form>
    </>
  );
};

export default NewPost;
