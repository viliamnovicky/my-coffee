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

export function Input({value, addClass, placeholder, type, forId, id, label}) {
  return <>
  <input placeholder={placeholder} type={type} className={`rounded-md text-center border-none outline-none focus:border-none w-[20ch] ${addClass}`}/>
  {label && <label >{label}</label>}
  </>
}

export function Select({value, addClass, children}) {
  return <select className={`rounded-md text-center border-none outline-none focus:border-none w-[20ch] ${addClass}`}>
  {children}
  </select>
}
