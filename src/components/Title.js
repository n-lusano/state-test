// src/components/Title.js
import React from "react";

//NB we use PascalCase for components
//1. export out Title component as default export
// this means we don't use brackets (destructuring) while importing the class
export default function Title(props) {
  return <h1>{props.content}</h1>;
}
