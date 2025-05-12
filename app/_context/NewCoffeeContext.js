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
  grindManual: 0,
  image:
    "https://firebasestorage.googleapis.com/v0/b/my-home-d1851.appspot.com/o/coffee%2Fcoffee_pouch_matt_black.png?alt=media&token=0d8fcb20-ccf0-4440-a018-2ee6522215fd",
  intensity: 0,
  origin: [],
  rating: 0,
  roast: 0,
  slug: "",
  taste: [],
  weightSingle: 0,
  weightDouble: 0,
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
    console.log(key, value);
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
