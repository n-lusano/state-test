import React from "react";
import "./App.css";
import Title from "./components/Title";
import LikeCounter from "./components/LikeCounter";

function App() {
  return (
    <main>
      <Title content="Some Simple Title" />
      <LikeCounter />
    </main>
  );
}

export default App;
