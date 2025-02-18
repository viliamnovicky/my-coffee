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
    image: "https://firebasestorage.googleapis.com/v0/b/my-home-d1851.appspot.com/o/coffee%2Fcoffee_pouch_matt_black.png?alt=media&token=0d8fcb20-ccf0-4440-a018-2ee6522215fd",
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