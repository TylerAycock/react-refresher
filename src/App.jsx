import "./App.css";
import { useState } from "react";
import PostsList from "./components/PostsList";

function App() {
  const [postList, setPostList] = useState([
    {
      author: "Tyler",
      body: "React.js is the best!",
    },
    {
      author: "Alex",
      body: "This React.js course is a life save!",
    },
  ]);
  return (
    <main>
      <PostsList postList={postList} setPostList={setPostList} />
    </main>
  );
}

export default App;
