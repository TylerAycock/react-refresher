import Modal from "../components/Modal";
import classes from "./NewPost.module.css";
import { Form, Link, redirect } from "react-router-dom";

const NewPost = () => {
  return (
    <Modal>
      <Form className={classes.form} method="post">
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" rows={3} required name="body" />
        </p>
        <p>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="author" required name="author"></input>
        </p>
        <div className={classes.actions}>
          <Link to="/">Cancel</Link>
          <button type="submit">Submit</button>
        </div>
      </Form>
    </Modal>
  );
};

export default NewPost;

export async function action(data) {
  let { request } = data;
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return redirect("/");
}
