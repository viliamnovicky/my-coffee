"use client";

import { useState } from "react";

export function AutoWidthInput() {
  const [text, setText] = useState("");

  return (
    <div className="flex items-center">
      {/* Hidden span to determine width */}
      <span className="invisible absolute whitespace-pre min-w-[3ch]" id="hiddenText">
        {text || ""}
      </span>

      {/* Input field */}
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border-none uppercase outline-none rounded-full px-4 text-right"
        style={{
          width: document.getElementById("hiddenText")?.offsetWidth || "3ch",
        }}
      />
    </div>
  );
}

export function Input({ value, addClass, placeholder, type, forId, id, label }) {
  return (
    <>
      <input
        placeholder={placeholder}
        type={type}
        className={`rounded-md text-center border-none outline-none focus:border-none w-[20ch] ${addClass}`}
      />
      {label && <label>{label}</label>}
    </>
  );
}

export function Select({ value, addClass, children }) {
  return (
    <select
      className={`rounded-md text-center border-none outline-none focus:border-none w-[20ch] ${addClass}`}
    >
      {children}
    </select>
  );
}

export function ImageInput({onImageSelect, addClass }) {

  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      onImageSelect(file); // Pass the file to the parent component
    }
  };

  return (
    <label className={`flex uppercase items-center gap-2 cursor-pointer px-4 py-2 bg-primary-300 text-primary-50 rounded-md hover:bg-primary-400 ${addClass}`}>
      {fileName ? "change image" : "choose Image"}
      <input onChange={handleFileChange} type="file" accept="image/*" className="hidden" />
      
    </label>
  );
}

export function TagCheckbox({ label }) {

  const [isChecked, setIsChecked] = useState(false);

  function toggleCheckbox(e) {
    e.preventDefault();
    setIsChecked(!isChecked);
  };

  return (
    <label
      className={`hover:bg-primary-400 hover:text-primary-50 cursor-pointer px-2 py-1 rounded-full text-sm text-center ${
        isChecked ? "bg-primary-500 text-primary-50" : "bg-primary-100 text-primary-500"
      }`}
      onClick={toggleCheckbox}
    >
      {label}
      <input type="checkbox" checked={isChecked} className="hidden" />
    </label>
  );
}
