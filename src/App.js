import React from "react";
import "./App.css";
import Title from "./components/Title";
import LikeCounter from "./components/LikeCounter";
import LikeButton from "./components/LikeButton";
import ArticleList from "./components/ArticleList";
// import AwesomeAnimals from "./components/AwesomeAnimals";
// import ArticleCard from "./components/ArticleCard";

function App() {
  return (
    <main className="text-center p-2">
      <Title content="Counting likes" />
      <div className="p-2">
        <LikeCounter />
      </div>
      <div className="p-2">
        <LikeButton />
      </div>
      <hr />
      <ArticleList />
    </main>
  );
}

export default App;
