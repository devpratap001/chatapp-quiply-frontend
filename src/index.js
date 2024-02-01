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
import Chat from './Components/Chat';
import Welcome from "./Components/Welcome";

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
    element: <ChatApp />,
    children: [
      {
        index: true,
        element: <Welcome />
      },
      {
        path: "/chatapp/:user",
        element: <Chat />
      }
    ]
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