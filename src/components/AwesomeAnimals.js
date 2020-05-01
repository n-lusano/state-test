import React from "react";

export default function AwesomeAnimals() {
  return ["Chicken", "Sloth", "Porcupine", "Killer whale", "Velociraptor"].map(
    (animal, index) => {
      // console.log("what is happening", animal, index);
      return (
        <ul>
          <li key={index}>
            Awesomeness level {index + 1} : {animal}
          </li>
        </ul>
      );
    }
  );
}
