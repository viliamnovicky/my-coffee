"use client";
import { useContext, useState } from "react";
import { createContext } from "react";

const NewBrewerContext = createContext();

const initialState = {
  mark: "",
  model: "",
  image: "https://firebasestorage.googleapis.com/v0/b/my-home-d1851.appspot.com/o/coffee%2Funknown-brewer.png?alt=media&token=79db463e-d954-4aa5-9eea-242be8b7df7d",
  description: "",
  type: "espresso machine",
  customSettings: [],
};

function NewBrewerProvider({ children }) {
  const [brewer, setBrewerData] = useState(initialState);

  const updateBrewerData = (key, value) => {
    setBrewerData((prev) => {
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

  const resetBrewerData = () => setBrewerData(initialState);

  return (
    <NewBrewerContext.Provider
      value={{ brewer, updateBrewerData, resetBrewerData }}
    >{children}</NewBrewerContext.Provider>
  );
}

function useNewBrewer() {
  const context = useContext(NewBrewerContext);
  if (context === undefined) throw new Error("Brewer context was used outside provider");
  return context;
}

export { NewBrewerProvider, useNewBrewer };
