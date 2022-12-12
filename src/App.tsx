import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  createBrowserRouter,
  Link,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./Components/Root";
import About from "./Components/About";
import SignUp from "./Pages/SignUp";
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element:<Home/>
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      }
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
