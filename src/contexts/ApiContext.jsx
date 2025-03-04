import { createContext, useState, useContext } from "react";

// create context
const ApiContext = createContext();

// create provider
const ApiProvider = ({ children }) => {
  const value = {};

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

// custom hook
const useApiContext = () => useContext(ApiContext);
