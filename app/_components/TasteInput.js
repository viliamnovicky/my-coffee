"use client"

import { useState } from "react";
import { useNewCoffee } from "../_context/NewCoffeeContext";
import Tag from "./Tag";
import flavours from "../_data/flavours"; // adjust path if needed

export default function TasteInput({coffee, updateCoffeeData}) {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const val = e.target.value;
    setInputValue(val);

    const filtered = flavours.filter(
      (f) =>
        f.name.toLowerCase().startsWith(val.toLowerCase()) &&
        !coffee.taste.some((t) => t.name === f.name)
    );
    setSuggestions(filtered);
  };

  const addFlavor = (flavor) => {
    updateCoffeeData("taste", [...coffee.taste, flavor]);
    setInputValue("");
    setSuggestions([]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      const match = flavours.find(
        (f) => f.name.toLowerCase() === inputValue.trim().toLowerCase()
      );

      if (match && !coffee.taste.some((t) => t.name === match.name)) {
        addFlavor(match);
      }
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    updateCoffeeData(
      "taste",
      coffee.taste.filter((tag) => tag.name !== tagToRemove.name)
    );
  };

  return (
    <div className="flex flex-col justify-center items-end relative">
      <input
        className="rounded-md text-center border-none outline-none focus:border-none w-[20ch]"
        placeholder="Add taste"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />

      {suggestions.length > 0 && (
        <ul className="absolute bg-white border rounded max-h-40 overflow-auto mt-1 z-10 w-full">
          {suggestions.map((flavor) => (
            <li
              key={flavor.name}
              className="p-2 hover:bg-primary-100 cursor-pointer text-center"
              onClick={() => addFlavor(flavor)}
            >
              <div className="font-semibold">{flavor.name}</div>
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap gap-2 mt-2">
        {coffee.taste.map((tag) => (
          <Tag
            key={tag.name}
            text={tag.name}
            color={tag.category} // assumes color is mapped from category
            addClass="cursor-pointer"
            onClick={() => handleRemoveTag(tag)}
          />
        ))}
      </div>
    </div>
  );
}
