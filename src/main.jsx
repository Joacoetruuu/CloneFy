import React from "react";
import ReactDOM from "react-dom/client";

import { ChakraProvider } from "@chakra-ui/react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/home/Home";
import TrackNav from "./components/home/TrackNav/TrackNav";
import Nav from "./components/home/Nav";
import Playlist from "./components/Playlist/Playlist";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path:"/",
    element: <Login/>
  },
  {
    path:"home", 
    element: <>
    
    <Home/>
    <TrackNav/>
    </>
  },
  {
    path:"playlist", 
    element: 
    <>
    <Playlist/>
    <TrackNav/>
    </>
  },
  {
    path:"ErrorBoundary",
    element:
    <>
    
    <div>
      erro
    </div>
    </>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router}/>
    </ChakraProvider>
  </React.StrictMode>
);
