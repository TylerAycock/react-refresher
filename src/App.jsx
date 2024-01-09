import "./App.css";
import Post from "./components/Post";

function App() {
  return (
    <main>
      <Post author="Tyler" body="React.js is awesome!" />
      <Post author="Alex" body="React.js is my favorite library!" />
    </main>
  );
}

export default App;
