import React, { useEffect } from "react";
// import ReactDOM from "react-dom/client";
import NavBar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { AuthContextProvider } from "./Contexts/AuthContext";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import { AppContextProvider } from "./Contexts/AppContext";

import axios from "axios";
import { NODE_API_ENDPOINT } from "./utils/utils";

const Applayout = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${NODE_API_ENDPOINT}/api/hii`);
        console.log(response);
        console.log("Data fetched successfully");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Fetch data initially
    fetchData();

    // Fetch data every 10 minutes
    const interval = setInterval(fetchData, 1 * 60 * 1000);

    // Cleanup function to clear interval
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <AuthContextProvider>
      <AppContextProvider>
        <React.Fragment>
          <NavBar />
          <Outlet />
          {/* <Temp /> */}
          <Footer />
          <Toaster />
        </React.Fragment>
      </AppContextProvider>
    </AuthContextProvider>
  );
};

export default Applayout;
