"use client";

import { createContext, useContext, useState } from "react";

const UserContext = createContext();

const initialState = {
  name: "",
  email: "",
  image: "",
  userId: "",
  grinders: [],
  coffeeMakers: [],
  about: "",
  favDrink: "",
  favMug: "",
};

function UserProvider({ children }) {
  const [user, setUserData] = useState(initialState);

  const updateUserData = (key, value) => {
    setUserData((prev) => {
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

  const resetUserData = () => setUserData(initialState);

  return (
    <UserContext.Provider value={{ user, updateUserData, resetUserData }}>
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) throw new Error("User context was used outside provider");
  return context;
}

export { UserProvider, useUser };
