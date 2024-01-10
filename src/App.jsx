import "./App.css";
import PostsList from "./components/PostsList";
import MainHeader from "./components/header/MainHeader";
import { useState } from "react";

function App() {
  const [modalVisability, setModalVisability] = useState(false);

  // const modalToggle = () => {
  //   console.log(modalVisability);
  //   setModalVisability(!modalVisability);
  // };
  console.log(modalVisability);

  const showModalHandler = () => {
    setModalVisability(true);
  };

  const hideModalHandler = (e) => {
    e.stopPropagation();
    setModalVisability(false);
  };

  return (
    <>
      <MainHeader modalToggle={showModalHandler} />
      <main>
        <PostsList
          modalVisability={modalVisability}
          modalToggle={hideModalHandler}
        />
      </main>
    </>
  );
}

export default App;
