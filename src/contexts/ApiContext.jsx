import { createContext, useState, useContext } from "react";

const apiContext = createContext();

const apiProvider = ({ children }) => {
  const value = {};

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};
