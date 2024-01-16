import classes from "./Post.module.css";
import { Link } from "react-router-dom";
const Post = ({ post }) => {
  return (
    <li className={classes.post}>
      <p className={classes.author}>{post.author}</p>
      <p className={classes.text}>{post.body}</p>
      <p>
        <Link to={`/:${post.id}`}>Enlarge</Link>
      </p>
    </li>
  );
};

export default Post;
