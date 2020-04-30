import React from "react";
import "./App.css";
import Title from "./components/Title";
import LikeCounter from "./components/LikeCounter";

function App() {
  return (
    <main className="container text-center p-2">
      <Title content="Counting likes" />
      <div className="p-2 mx-auto">
        <LikeCounter />
      </div>
    </main>
  );
}

export default App;
