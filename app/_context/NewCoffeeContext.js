"use client";

import { createContext, useContext, useState } from "react";

const NewCoffeeContext = createContext();

const initialState = {
  roasteryName: "",
  coffeeName: "",
  acidity: 0,
  beanType: "",
  caffeine: 0,
  coffeeType: [],
  description: "",
  doseLevel: 0,
  elevation: {
    top: 0,
    bottom: 0,
  },
  grindFilter: 0,
  grindMachine: 0,
  grindMoka: 0,
  grindEspresso: 0,
  image: "",
  intensity: 0,
  origin: [],
  rating: 0,
  roast: 0,
  taste: [],
  weightSmall: 0,
  weightMedium: 0,
  weightLarge: 0,
  weightFilter: 0,
};

function NewCoffeeProvider({ children }) {
  const [coffee, setNewCoffeeData] = useState(initialState);

  const updateCoffeeData = (key, value) => {
    setNewCoffeeData((prev) => {
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

  const resetCoffeeData = () => setNewCoffeeData(initialState);

  return (
    <NewCoffeeContext.Provider
      value={{ coffee, setNewCoffeeData, resetCoffeeData, updateCoffeeData }}
    >
      {children}
    </NewCoffeeContext.Provider>
  );
}

function useNewCoffee() {
  const context = useContext(NewCoffeeContext);
  if (context === undefined) throw new Error("Context was used outside provider");
  return context;
}

export { NewCoffeeProvider, useNewCoffee };
