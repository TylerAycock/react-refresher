import "./App.css";
import PostsList from "./components/PostsList";
import MainHeader from "./components/header/MainHeader";
import { useState } from "react";

function App() {
  const [modalVisability, setModalVisability] = useState(false);

  const modalToggle = (e) => {
    console.log(e.target);
    setModalVisability(!modalVisability);
  };

  return (
    <>
      <MainHeader modalToggle={modalToggle} />
      <main>
        <PostsList
          modalVisability={modalVisability}
          modalToggle={modalToggle}
        />
      </main>
    </>
  );
}

export default App;
