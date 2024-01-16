import { Link, useLoaderData } from "react-router-dom";
import classes from "./PostDetails.module.css";
import Modal from "../components/Modal";

function PostDetails() {
  const post = useLoaderData();

  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately the requested post could not be found.</p>
          <p>
            <Link to="..">Okay</Link>
          </p>
        </main>
      </Modal>
    );
  } else {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>{post.author}</h1>
          <p>{post.body}</p>
          <p>
            <Link to="..">Okay</Link>
          </p>
        </main>
      </Modal>
    );
  }
}

export default PostDetails;

export async function loader({ params }) {
  const res = await fetch(`http://localhost:8080/posts/${params.id}`);
  const resData = await res.json();
  return resData
}
