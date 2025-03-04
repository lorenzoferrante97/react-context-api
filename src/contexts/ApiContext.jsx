import { createContext, useState, useContext } from "react";

// create context
const ApiContext = createContext();

// create provider
const ApiProvider = ({ children }) => {
  const [postsList, setPostsList] = useState([]);
  const [post, setPost] = useState({
    id: 0,
    title: "",
    content: "",
    image: "",
    tags: []
  });

  // fetch api -> index
  const getPosts = () => {
    fetch("http://localhost:3000/posts")
      .then(response => response.json())
      .then(data => setPostsList(data))
      .catch(error => {
        console.error(error);
      });
  };

  // fetch api -> show
  const getPost = id => {
    fetch(`http://localhost:3000/posts/${id}`)
      .then(response => response.json())
      .then(data => setPost(data))
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
