import classes from "./NewPost.module.css";
import { useState } from "react";

const NewPost = ({ onAddPost, onCancel }) => {
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    let postData = {
      body: body,
      author: author,
    };
    onAddPost(postData);
    onCancel();
  };

  return (
    <>
      <form className={classes.form} onSubmit={submitHandler}>
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
        <div className={classes.actions}>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default NewPost;
