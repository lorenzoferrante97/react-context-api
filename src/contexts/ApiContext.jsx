import { createContext, useState, useContext } from "react";

// create context
const ApiContext = createContext();

// create provider
const ApiProvider = ({ children }) => {
  const [postsList, setPostsList] = useState([]);

  // fetch api -> index
  const getPosts = () => {
    fetch("http://localhost:3000/posts")
      .then(response => response.json())
      .then(data => setPostsList(data))
      .catch(error => {
        console.error(error);
      });
  };

  const value = {};

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

// custom hook
const useApiContext = () => useContext(ApiContext);

// export provider + hook
export { ApiProvider, useApiContext };
