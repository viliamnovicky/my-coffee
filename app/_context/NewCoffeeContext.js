"use client";

import { createContext, useCallback, useContext, useState } from "react";

const NewCoffeeContext = createContext();

const initialState = {
  roasteryName: "",
  coffeeName: "",
  acidity: 0,
  beanType: "",
  caffeine: "",
  coffeeType: [],
  description: "",
  notes: "",
  doseLevel: 0,
  elevation: {
    top: 0,
    bottom: 0,
  },
  region: "",
  farm: "",
  variety: "",
  process: "",
  origin: [],
  grindFilter: 0,
  grindMachine: 0,
  grindMoka: 0,
  grindEspresso: 0,
  image: "",
  rating: 0,
  roast: 0,
  intensity: 0,
  taste: [],
  weightSmall: 0,
  weightMedium: 0,
  weightLarge: 0,
  weightFilter: 0,
  grindSettings: {},
  weightSettings: [{ name: " ", value: 0 }],
};

function createGrindSettingsForGrinders(grinders) {
  const defaultSettings = [

    { name: "espresso", value: 0 },
    { name: "filter", value: 0 },
    { name: "moka pot", value: 0 },
  ];

  let testSettings = []

  grinders.map((grinder) => {
    grinder.uses.map(type => testSettings.push({name: type.name, value: 0}))
  })

  console.log(testSettings)

  return testSettings
  //return grinders.map(() => defaultSettings.map((setting) => ({ ...setting })));
}

function NewCoffeeProvider({ children }) {
  const [coffee, setNewCoffeeData] = useState(initialState);

  const updateCoffeeData = (key, value, options = {}) => {
    setNewCoffeeData((prev) => {
      if (
        key === "grindSettings" &&
        options.grinderKey &&
        typeof options.settingIndex === "number"
      ) {
        const newGrindSettings = { ...prev.grindSettings };
        newGrindSettings[options.grinderKey] = [...newGrindSettings[options.grinderKey]];
        newGrindSettings[options.grinderKey][options.settingIndex].value = value;
        return { ...prev, grindSettings: newGrindSettings };
      }

      if (key === "weightSettings" && typeof options.index === "number") {
        const updatedWeightSettings = [...prev.weightSettings];
        updatedWeightSettings[options.index] = {
          ...updatedWeightSettings[options.index],
          value: value,
        };
        return { ...prev, weightSettings: updatedWeightSettings };
      }

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

  function createGrindSettingsForGrinders(grinders) {
    const defaultSettings = [
      { name: "espresso", value: 0 },
      { name: "filter", value: 0 },
      { name: "moka pot", value: 0 },
    ];

    const settings = {};
    grinders.forEach((grinder) => {
      const grinderKey = `${grinder.mark}-${grinder.model}`; // unique ID
      settings[grinderKey] = defaultSettings.map((s) => ({ ...s }));
    });

    return settings;
  }

  const syncGrindSettingsWithGrinders = useCallback((grinders) => {
    const newSettings = createGrindSettingsForGrinders(grinders);
    setNewCoffeeData((prev) => ({
      ...prev,
      grindSettings: newSettings,
    }));
  }, []);

  const resetCoffeeData = () => setNewCoffeeData(initialState);

  return (
    <NewCoffeeContext.Provider
      value={{
        coffee,
        setNewCoffeeData,
        resetCoffeeData,
        updateCoffeeData,
        syncGrindSettingsWithGrinders,
      }}
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
