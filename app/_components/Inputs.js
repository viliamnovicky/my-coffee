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

export function Input({ value, addClass, placeholder, type, forId, id, label, onChange, ...rest }) {
  return (
    <div className="flex gap-2 justify-between items-center w-[50%]">
      {label && <label>{label}</label>}
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
        {...rest}
        className={`rounded-md text-center border-none outline-none focus:border-none w-[20ch] ${addClass}`}
      />
    </div>
  );
}

export function Select({ value, addClass, children, onChange }) {
  return (
    <select
      onChange={onChange}
      value={value}
      className={`rounded-md text-center border-none outline-none focus:border-none w-[20ch] ${addClass}`}
    >
      {children}
    </select>
  );
}

export function ImageInput({ onChange, addClass, fileName }) {
  return (
    <label
      className={`flex uppercase items-center gap-2 cursor-pointer px-4 py-2 bg-primary-300 text-primary-50 rounded-md hover:bg-primary-400 ${addClass}`}
    >
      {fileName ? "change image" : "choose Image"}
      <input onChange={onChange} type="file" accept="image/*" className="hidden" />
    </label>
  );
}

export function TagCheckbox({ label, onChange, value, checked }) {
  return (
    <label
      className={`hover:bg-primary-400 hover:text-primary-50 cursor-pointer px-2 py-1 rounded-full text-sm text-center ${
        checked ? "bg-primary-500 text-primary-50" : "bg-primary-100 text-primary-900"
      }`}
    >
      {label}
      <input
        value={value}
        type="checkbox"
        onChange={onChange}
        checked={checked}
        className="hidden"
      />
    </label>
  );
}
