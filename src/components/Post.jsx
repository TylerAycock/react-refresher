const Post = (props) => {
    console.log(props)
  return (
    <div>
      <p>{props.author}</p>
      <p>{props.body}</p>
    </div>
  );
};

export default Post;
