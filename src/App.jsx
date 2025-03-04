// import { useState } from 'react'
// import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
// import provider
import { ApiProvider } from "./contexts/ApiContext";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* layout */}
        <Route Component={DefaultLayout}>
          <Route path='/' Component={Homepage}></Route>
          <Route path='/about-us' Component={AboutUs}></Route>
          <Route path='/posts' Component={Posts}></Route>
          <Route path='/posts/:id' Component={Post}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// start code
