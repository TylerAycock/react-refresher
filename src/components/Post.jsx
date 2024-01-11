import classes from "./Post.module.css";

const Post = ({ post }) => {
  return (
    <li className={classes.post}>
      <p className={classes.author}>{post.author}</p>
      <p className={classes.text}>{post.body}</p>
    </li>
  );
};

export default Post;
