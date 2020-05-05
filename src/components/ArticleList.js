// src/components/ArticleList.js
import React, { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import Timeout from "await-timeout";
import axios from "axios";

export default function ArticleList() {
  const [articles, set_articles] = useState();

  useEffect(() => {
    async function doSomeDataFetching() {
      console.log("I'm gonna fetch some data");
      await Timeout.set(2000); //time in milliseconds
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      console.log("Got back:", res);
      set_articles(res);
    }
    doSomeDataFetching();
  }, []);

  if (articles) {
    return (
      <div>
        <p>
          <h2>Here's a lovely list of articles, for your reading pleasure:</h2>
        </p>
        {articles.data.map((article) => {
          return (
            <ArticleCard
              title={article.title}
              content={article.body}
              key={articles.data.id}
            />
          );
        })}
      </div>
    );
  } else {
    return (
      <div>
        <p>
          <h2>Here's a lovely list of articles, for your reading pleasure:</h2>
        </p>
        <p>Loading...</p>
      </div>
    );
  }
}
