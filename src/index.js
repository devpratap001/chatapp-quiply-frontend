import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './index.css';
import store from "./Redux/Store";
import { Provider } from 'react-redux';
import App from './App';
import Register from "./Routes/Register/Register";
import Login from "./Routes/Login/Login";
import ChatApp from "./Routes/ChatApp/ChatApp";

const router= createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/chatapp",
    element: <ChatApp />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store= {store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);