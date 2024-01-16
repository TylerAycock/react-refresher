import "./App.css";
import PostsList from "../components/PostsList";
import { Outlet } from "react-router-dom";


function Posts() {
  //this was originally the App.js file which we renamed and moved to the routes seciton

  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const res = await fetch("http://localhost:8080/posts");
  const resData = await res.json();
  return resData.posts;
}
