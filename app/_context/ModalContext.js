"use client";

import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [openModalId, setOpenModalId] = useState(null);

  function openModal(id) {
    setOpenModalId(id);
  }

  function closeModal() {
    setOpenModalId(null);
  }

  return (
    <ModalContext.Provider value={{ openModalId, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalProvider };

export function useModal() {
  const context = useContext(ModalContext);
  if (!context)
    throw new Error("useModal must be used inside ModalProvider");
  return context;
}

