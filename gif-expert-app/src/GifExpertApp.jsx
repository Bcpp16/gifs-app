import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

function GifExpertApp() {
  const [categories, setCategories] = useState(['Happy']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <header className="container-title">
        <h1 className="title">
          <span className="title-span">GIF</span> Expert
        </h1>

        <img className="gif-emoji" src="./assets/emoji.gif" alt="emoji" />
      </header>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
}

export default GifExpertApp;
