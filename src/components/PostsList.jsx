import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";

const PostsList = (props) => {
  return (
    <>
      <NewPost postList={props.postList} setPostList={props.setPostList} />
      <ul className={classes.post__list}>
        {props.postList.map((post, index) => {
          return <Post author={post.author} body={post.body} key={index} />;
        })}
      </ul>
    </>
  );
};

export default PostsList;
