"use client"

import { createContext, useContext, useState } from "react";

const NewCoffeeContext = createContext();

const initialState = {
    roasteryName: undefined,
    coffeeName: undefined,
    acidity: undefined,
    beanType: undefined,
    caffeine: undefined,
    coffeeType: undefined,
    description: undefined,
    doseLevel: undefined,
    elevation: {
        top: undefined,
        bottom:undefined,
    },
    grindFilter: undefined,
    grindMachine: undefined,
    grindManual: undefined,
    image: undefined,
    intensity: undefined,
    origin: [],
    rating: undefined,
    roast: undefined,
    slug: undefined,
    taste: [],
    weightSingle: undefined,
    weightDouble: undefined,
    weightFilter: undefined,
  };

function NewCoffeeProvider({children}) {
    const [coffee, setNewCoffeeData] = useState(initialState);

    const updateCoffeeData = (key, value) => {
        setNewCoffeeData((prev) => ({ ...prev, [key]: value }));
      };

    const resetCoffeeData = () => setNewCoffeeData(initialState);
  
    return (
    <NewCoffeeContext.Provider value={{ coffee, setNewCoffeeData, resetCoffeeData, updateCoffeeData }}>
      {children}
    </NewCoffeeContext.Provider>
  );
}

function useNewCoffee() {
  const context = useContext(NewCoffeeContext);
  if (context === undefined) throw new Error("Context was used outside provider");
  return context;
}

export {NewCoffeeProvider, useNewCoffee}