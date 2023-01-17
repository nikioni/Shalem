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
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard/Dashboard";
import Auth from "./Pages/Auth";

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
        element: <Auth/>,
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
