import React from "react";
import "./App.css";
import Title from "./components/Title";
import LikeCounter from "./components/LikeCounter";
import LikeButton from "./components/LikeButton";
import ArticleList from "./components/ArticleList";
// import AwesomeAnimals from "./components/AwesomeAnimals";
// import ArticleButton from "./components/ArticleButton";

function App() {
  return (
    <main className="text-center p-2">
      {/* <Title content="Counting likes" />
      <div className="p-2">
        <LikeCounter />
      </div>
      <div className="p-2">
        <LikeButton />
      </div>
      <hr /> */}
      {/* <div className="p-2">
        <ArticleButton />
      </div> */}
      <div className="p-2">
        <ArticleList />
      </div>
    </main>
  );
}

export default App;
