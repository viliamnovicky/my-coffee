"use client";

import { createContext, useCallback, useContext, useState } from "react";

const NewCoffeeContext = createContext();

const initialState = {
  roasteryName: "",
  coffeeName: "",
  acidity: 0,
  beanType: "arabica",
  caffeine: "decaf",
  coffeeType: [],
  coffeeDrink: [],
  description: "",
  notes: "",
  elevation: {
    top: 0,
    bottom: 0,
  },
  region: "",
  farm: "",
  variety: "",
  process: "",
  origin: [],
  image: "",
  rating: 0,
  roast: 0,
  intensity: 0,
  taste: [],
  grindSettings: [],
  doseLevel: [],
  weightSettings: [],
  isBio: false,
  isClimaNeutral: false,
  notes: [],
  beansScore: 0,
};

function createGrindSettingsForGrinders(grinders) {
  const defaultSettings = [
    { name: "espresso", value: 0 },
    { name: "filter", value: 0 },
    { name: "moka pot", value: 0 },
  ];

  grinders.map((grinder) => {
    grinder.uses.map((type) => testSettings.push({ name: type.name, value: 0 }));
  });

  return grinders.map(() => defaultSettings.map((setting) => ({ ...setting })));
}

function NewCoffeeProvider({ children, initialCoffee = null }) {
const [coffee, setNewCoffeeData] = useState(initialCoffee || initialState);
  const updateCoffeeData = (key, value, options = {}) => {
    setNewCoffeeData((prev) => {
      if (
        key === "grindSettings" &&
        typeof options.grinderIndex === "number" &&
        typeof options.settingIndex === "number"
      ) {
        const updated = [...prev.grindSettings];
        updated[options.grinderIndex] = {
          ...updated[options.grinderIndex],
          settings: [...updated[options.grinderIndex].settings],
        };
        updated[options.grinderIndex].settings[options.settingIndex].value = value;
        return { ...prev, grindSettings: updated };
      }

      if (
        key === "weightSettings" &&
        typeof options.makerIndex === "number" &&
        typeof options.weightIndex === "number"
      ) {
        const updatedSettings = [...prev.weightSettings];
        const makerSettings = { ...updatedSettings[options.makerIndex] };

        const updatedValues = [...makerSettings.values];
        updatedValues[options.weightIndex] = {
          ...updatedValues[options.weightIndex],
          value: value,
        };

        updatedSettings[options.makerIndex] = {
          ...makerSettings,
          values: updatedValues,
        };

        return { ...prev, weightSettings: updatedSettings };
      }

      if (key === "doseLevel" && options.grinderName) {
        const updatedDoseLevels = [...(prev.doseLevel || [])];
        const existingIndex = updatedDoseLevels.findIndex((d) => d.grinder === options.grinderName);
        if (existingIndex >= 0) {
          updatedDoseLevels[existingIndex] = {
            ...updatedDoseLevels[existingIndex],
            value,
          };
        } else {
          updatedDoseLevels.push({ grinder: options.grinderName, value });
        }

        return { ...prev, doseLevel: updatedDoseLevels };
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
    return grinders.map((grinder) => ({
      grinder: `${grinder.mark} ${grinder.model}`,
      settings: grinder.uses.map((use) => ({
        name: use,
        value: 0,
      })),
    }));
  }

  const syncGrindSettingsWithGrinders = useCallback((grinders) => {
    const newSettings = createGrindSettingsForGrinders(grinders);
    setNewCoffeeData((prev) => ({
      ...prev,
      grindSettings: newSettings,
    }));
  }, []);

  const syncWeightSettingsWithMakers = useCallback((coffeeMakers) => {
    const settings = coffeeMakers.map((maker) => {
      const makerKey = `${maker.mark} ${maker.model}`;
      const isEspresso = maker.type === "espresso machine";

      const values = isEspresso
        ? ["8g cup", "13g cup", "18g cup"].map((name) => ({ name, value: 0 }))
        : [{ name: " ", value: 0 }];

      return {
        maker: makerKey,
        values,
      };
    });

    setNewCoffeeData((prev) => ({
      ...prev,
      weightSettings: settings,
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
        syncWeightSettingsWithMakers,
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
