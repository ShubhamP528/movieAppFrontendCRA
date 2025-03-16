import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthcontext } from "../Contexts/AuthContext";
import AlertForm from "./AlertForm";
import { useAppContext } from "../Contexts/AppContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

import logo from "../Assets/Images/movieLogo.png";
import PlayByLinkForm from "./PlayByLinkForm";
import { NODE_API_ENDPOINT } from "../utils/utils";
import socket from "../connection";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useLogout();
  const { TheatorUser } = useAuthcontext();
  const navigate = useNavigate();

  const [onlineUsers, setOnlineUsers] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [showLinkForm, setShowLinkForm] = useState(false);
  const { room, setRoom, videoId, setVideoId } = useAppContext();

  useEffect(() => {
    // Emit the totalUsers event initially
    socket.emit("totalUsers", { room });

    // Set up a 30-second interval to emit the event
    const intervalId = setInterval(() => {
      socket.emit("totalUsers", { room });
    }, 1000); // 1 seconds

    // Listen for the totalUsers-ans event
    socket.on("totalUsers-ans", (data) => {
      setOnlineUsers(data);
    });

    // Clean up the interval and socket listeners when the component unmounts or room changes
    return () => {
      clearInterval(intervalId); // Clear the interval
      socket.off("totalUsers"); // Remove socket listener for totalUsers
      socket.off("totalUsers-ans"); // Remove socket listener for totalUsers-ans
    };
  }, [room]); // Re-run when the room changes

  useEffect(() => {
    // Listen for incoming messages
    socket.on("receiveMessage", (msg) => {
      if (TheatorUser?.email !== msg?.email) {
        toast.success(`${msg.name}: ${msg.text}`);
      }
    });

    // Cleanup on component unmount
    return () => {
      socket.off("receiveMessage");
    };
  }, [TheatorUser?.email, TheatorUser?.name]);

  const handleShowAlert = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const handleLinkForm = () => {
    setShowLinkForm(true);
  };

  const handleCloseLinkForm = () => {
    setShowLinkForm(false);
  };

  const getInRoom = async () => {
    if (room) {
      try {
        const data = await axios.post(
          `${NODE_API_ENDPOINT}/api/getVideoId`,
          {
            room: room,
          },
          {
            headers: {
              Authorization: `Bearer ${TheatorUser?.token}`,
            },
          }
        );
        console.log(data.data);
        if (data?.data?.videoId === "not available") {
          toast.error("Play video first");
        }
        if (data?.data?.videoId !== "not available" && data?.data?.videoId) {
          setVideoId(data?.data?.videoId);
          navigate(`/video/${data?.data?.videoId}/${room}`);
        }
      } catch (err) {
        toast.error(err?.response?.data?.message + " First Play Video");
        console.log(err);
      }
    }
  };

  return (
    <nav className="bg-gray-800">
      {showAlert && <AlertForm onClose={handleCloseAlert} />}
      {showLinkForm && <PlayByLinkForm onClose={handleCloseLinkForm} />}
      <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-4 max-[1088px]:text-xs nl:text-sm nh:text-sm">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-10 md:h-10 lg:h-12 xl:mr-4 w-auto rounded-full"
                />
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-1 md:space-x-2 lg:space-x-4 ">
                <Link
                  to="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white nh:px-2 xl:px-3 lg:px-0 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white nh:px-2 xl:px-3 lg:px-0 py-2 rounded-md text-sm font-medium"
                >
                  About
                </Link>
                <Link
                  to="/theator"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white nh:px-2 xl:px-3 lg:px-0 py-2 rounded-md text-sm font-medium"
                >
                  Theator
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white nh:px-2 xl:px-3 lg:px-0 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            {TheatorUser ? (
              <>
                <button
                  className="text-nowrap bg-blue-500 text-white md:px-2 md:py-1 px-3 py-2 rounded hover:bg-blue-600 transition duration-300"
                  onClick={handleLinkForm}
                >
                  Play by link
                </button>
                {/* {showLinkForm && (
                  <PlayByLinkForm onClose={handleCloseLinkForm} />
                )} */}
                <span className="text-gray-300 font-medium text-nowrap">
                  Welcome, {TheatorUser.name}!
                </span>
                <span className="text-gray-300 font-medium text-nowrap">
                  Room:{" "}
                  <button
                    onClick={getInRoom}
                    className="text-nowrap text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {room}!
                  </button>
                </span>
                <button
                  onClick={handleShowAlert}
                  className="text-nowrap bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 transition duration-300"
                >
                  Join New Room
                </button>
                <span className="text-gray-300 font-medium text-sm text-nowrap">
                  Online: {onlineUsers}
                </span>

                <button
                  onClick={logout}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
          <div className="mr-2 flex lg:hidden relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded="false"
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            {onlineUsers > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white">
                {onlineUsers}
              </span>
            )}
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} lg:hidden`}>
        <div className="px-2 pt-2 pb-3 sm:px-3">
          <Link
            to="/"
            onClick={() => setIsOpen(false)} // Close the menu
            className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)} // Close the menu
            className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </Link>
          <Link
            to="/theator"
            onClick={() => setIsOpen(false)} // Close the menu
            className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
          >
            Theator
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)} // Close the menu
            className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </Link>
          {TheatorUser ? (
            <>
              <button
                className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 transition duration-300 mx-1"
                onClick={() => {
                  handleLinkForm();
                  setIsOpen(false); // Close the menu after clicking the button
                }}
              >
                Play by link
              </button>
              <span className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                Welcome, {TheatorUser.name}!
              </span>
              <span className="text-gray-300 font-medium px-3 py-2">
                Room:
                <button
                  onClick={() => {
                    getInRoom();
                    setIsOpen(false); // Close the menu after clicking the button
                  }}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {room}!
                </button>
              </span>
              <button
                onClick={() => {
                  handleShowAlert();
                  setIsOpen(false); // Close the menu after clicking the button
                }}
                className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 transition duration-300"
              >
                Join New Room
              </button>
              <span className="block text-gray-300 px-3 py-2 rounded-md text-base font-medium">
                Users Online: {onlineUsers}
              </span>
              <button
                onClick={() => {
                  logout();
                  setIsOpen(false); // Close the menu after clicking the button
                }}
                className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                onClick={() => setIsOpen(false)} // Close the menu
                className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              >
                Login
              </Link>
              <Link
                to="/signup"
                onClick={() => setIsOpen(false)} // Close the menu
                className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
