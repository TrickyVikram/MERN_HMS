import React from 'react';
import { createBrowserRouter } from 'react-router-dom';  // Ensure you're importing from 'react-router-dom'
import Register from '../pages/auth/Register';
import Login from '../pages/auth/Login';
import MainLayout from '../layout/MainLayout';
import Body from '../pages/Body';
import Page_404 from '../pages/Page_404';

// Define the routes correctly
const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",  // Default route
        element: <Body />,
      },
      {
        path: "register",  // Nested route for Register
        element: <Register />,
      },
      {
        path: "login",  // Nested route for Login
        element: <Login />,
      },
    ],
  },
  {
    path: "*",  // Catch-all route for 404
    // eslint-disable-next-line react/jsx-pascal-case
    element: <Page_404/>,
  },
]);

export default AppRoutes;
