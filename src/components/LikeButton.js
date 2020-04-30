import React, { useState } from "react"; // <- note the added import of useState

export default function LikeButton() {
  const [toggleButton, setToggleButton] = useState(false); // <- state true || false
  //   console.log("are these working?", numLikes, set_numLikes);

  const toggleLike = () => {
    setToggleButton(!toggleButton);
  };

  const likedUnliked = toggleButton ? "You already liked this" : "Like this";

  return (
    <div className="text-secondary">
      <button className="text-secondary m-2" onClick={toggleLike}>
        Click here
      </button>
      <br />
      {likedUnliked}
    </div>
  );
}
