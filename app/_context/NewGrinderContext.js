"use client";
import { useContext, useState } from "react";
import { createContext } from "react";

const NewGrinderContext = createContext();

const initialState = {
  mark: "",
  model: "",
  image:
    "https://firebasestorage.googleapis.com/v0/b/my-home-d1851.appspot.com/o/coffee%2Funknown-grinder.png?alt=media&token=49c90928-4c25-4f8a-a0d0-913b077296a9",
  description: "",
  type: "manual",
  steps: 0,
  customSettings: [],
};

function NewGrinderProvider({ children }) {
  const [grinder, setGrinderData] = useState(initialState);

  const updateGrinderData = (key, value) => {
    setGrinderData((prev) => {
      const keys = key.split(".");
      if (keys.length === 1) {
        return { ...prev, [key]: value };
      } else {
        const [parent, child] = keys;
        return {
          ...prev,
          [parent]: {
            ...prev[parent],
            [child]: value,
          },
        };
      }
    });
  };

  const resetGrinderData = () => setGrinderData(initialState);

  return (
    <NewGrinderContext.Provider value={{ grinder, updateGrinderData, resetGrinderData }}>
      {children}
    </NewGrinderContext.Provider>
  );
}

function useNewGrinder() {
  const context = useContext(NewGrinderContext);
  if (context === undefined) throw new Error("Grinder context was used outside provider");
  return context;
}

export { NewGrinderProvider, useNewGrinder };
