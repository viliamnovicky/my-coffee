"use client";

import { createContext, useContext, useState } from "react";

const NewCoffeeContext = createContext();

const initialState = {
  roasteryName: "",
  coffeeName: "",
  acidity: null,
  beanType: "",
  caffeine: null,
  coffeeType: [],
  description: "",
  doseLevel: null,
  elevation: {
    top: null,
    bottom: null,
  },
  grindFilter: null,
  grindMachine: null,
  grindManual: null,
  image: "",
  intensity: null,
  origin: [],
  rating: null,
  roast: null,
  taste: [],
  weightSmall: null,
  weightMedium: null,
  weightLarge: null,
  weightFilter: null,
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
