import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import {
//   createBrowserRouter,
//   RouterProvider,
//   redirect,
// } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     loader: async ({ request, params }) => {
//       return redirect("/personal-info");
//     },
//   },
//   {
//     path: "/personal-info",
//     element: <App progress="1" />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);
