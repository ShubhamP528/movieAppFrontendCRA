import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
import Applayout from "./App";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Error from "./components/Error";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Theator from "./components/Theator";
import Ytplayer from "./components/Ytplayer";
import TermsAndConditions from "./components/TermAndCondition";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ManualVideo from "./components/ManualVideo";
import ManualVideoList from "./components/ManualVideList";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,

    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/term-and-conditions",
        element: <TermsAndConditions />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/theator",
        element: <Theator />,
      },
      {
        path: "video/:id/:room",
        element: <Ytplayer />,
      },
      {
        path: "/manualVideList",
        element: <ManualVideoList />,
      },
      {
        path: "/manualVideo/:id/:room",
        element: <ManualVideo />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
