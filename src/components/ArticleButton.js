import React, { useState } from "react";
import ArticleList from "./ArticleList";

export default function ArticleButton() {
  const [toggleButton, setToggleButton] = useState(true); // <- state true || false
  //   console.log("are these working?", toggleButton);

  const toggleLike = () => {
    setToggleButton(!toggleButton);
  };

  const buttonClicked = toggleButton ? (
    <ArticleList />
  ) : (
    "You should check the articles out! Click the button again!"
  );

  return (
    <div>
      <p>Here's a lovely list of articles, for your reading pleasure:</p>
      <p>
        <button className="text-secondary m-2" onClick={toggleLike}>
          Clear notifications
        </button>
      </p>
      <br />
      {buttonClicked}
    </div>
  );
}
