// src/components/LikeCounter.js
import React, { useState } from "react"; // <- note the added import of useState

export default function LikeCounter() {
  const initial_numLikes = 0;
  const [numLikes, set_numLikes] = useState(initial_numLikes); // <- using state!
  //   console.log("what are these?", numLikes, set_numLikes);
  const increment = () => {
    // console.log("Button clicked! Current number of likes:", numLikes);
    set_numLikes(numLikes + 1);
  };
  const decrement = () => {
    set_numLikes(numLikes - 1);

    if (numLikes <= 0) {
      set_numLikes(0);
    }
  };
  const reset = () => {
    set_numLikes(0);
  };

  return (
    <div>
      <p>
        This post has <b>{numLikes}</b> likes!
        <br />
        <br />
        <button className="text-primary m-2" onClick={increment}>
          Like
        </button>
        <button className="text-primary m-2" onClick={decrement}>
          Unlike
        </button>
        <button className="text-danger m-2" onClick={reset}>
          Reset
        </button>
      </p>
    </div>
  );
}
