import React from "react";
import "./App.css";
import Title from "./components/Title";
import LikeCounter from "./components/LikeCounter";
import LikeButton from "./components/LikeButton";

function App() {
  return (
    <main className="container-sm text-center p-2">
      <Title content="Counting likes" />
      <div className="p-2">
        <LikeCounter />
      </div>
      <div className="p-2">
        <LikeButton />
      </div>
    </main>
  );
}

export default App;
