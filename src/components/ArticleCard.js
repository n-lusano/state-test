// src/components/ArticleCard.js
import React from "react";

export default function ArticleCard(props) {
  return (
    <div className="Article">
      <h4>{props.title}</h4>
      <p>{props.content}</p>
    </div>
  );
}
