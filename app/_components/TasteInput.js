"use client"

import { useState } from "react";
import { useNewCoffee } from "../_context/NewCoffeeContext";
import Tag from "./Tag";

export default function TasteInput() {
  const [inputValue, setInputValue] = useState("");
  const { coffee, updateCoffeeData } = useNewCoffee();

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault(); // Prevent form submission
      const newTag = inputValue.trim();

      if (!coffee.taste.includes(newTag)) {
        updateCoffeeData("taste", [...coffee.taste, newTag]);
      }

      setInputValue(""); // Clear input
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    updateCoffeeData(
      "taste",
      coffee.taste.filter((tag) => tag !== tagToRemove)
    );
  };

  return (
    <div className="flex flex-col justify-center items-end">
      <input
        className="rounded-md text-center border-none outline-none focus:border-none w-[20ch]"
        placeholder='Add taste'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <div className="flex flex-wrap gap-2 mt-2">
        {coffee.taste.map((tag) => (
          <Tag
            key={tag}
            text={tag}
            color="taste"
            addClass="cursor-pointer"
            onClick={() => handleRemoveTag(tag)}
          />
        ))}
      </div>
    </div>
  );
}
