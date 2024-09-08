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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useLogout();
  const { TheatorUser } = useAuthcontext();
  const { room, setRoom } = useAppContext();
  const navigate = useNavigate();

  const [showAlert, setShowAlert] = useState(false);
  const [showLinkForm, setShowLinkForm] = useState(false);

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
          "/api/getVideoId",
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
      <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-4 max-[1088px]:text-xs ">
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
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </Link>
                <Link
                  to="/theator"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Theator
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
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
                  className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 transition duration-300"
                  onClick={handleLinkForm}
                >
                  Play by link
                </button>
                {showLinkForm && (
                  <PlayByLinkForm onClose={handleCloseLinkForm} />
                )}
                <span className="text-gray-300 font-medium">
                  Welcome, {TheatorUser.username}!
                </span>
                <span className="text-gray-300 font-medium">
                  Room:{" "}
                  <button
                    onClick={getInRoom}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {room}!
                  </button>
                </span>
                <button
                  onClick={handleShowAlert}
                  className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 transition duration-300"
                >
                  Join New Room
                </button>
                {showAlert && <AlertForm onClose={handleCloseAlert} />}

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
          <div className="mr-2 flex lg:hidden">
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
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} lg:hidden`}>
        <div className="px-2 pt-2 pb-3 sm:px-3">
          <Link
            to="/"
            className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </Link>
          <Link
            to="/theator"
            className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
          >
            Theator
          </Link>
          <Link
            to="/contact"
            className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </Link>
          {TheatorUser ? (
            <>
              <button
                className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 transition duration-300 mx-1"
                onClick={handleLinkForm}
              >
                Play by link
              </button>
              {showLinkForm && <PlayByLinkForm onClose={handleCloseLinkForm} />}
              <span className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                Welcome, {TheatorUser.username}!
              </span>
              <span className="text-gray-300 font-medium px-3 py-2">
                Room:
                <button
                  onClick={getInRoom}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {room}!
                </button>
              </span>
              <button
                onClick={handleShowAlert}
                className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 transition duration-300"
              >
                Join New Room
              </button>
              {showAlert && <AlertForm onClose={handleCloseAlert} />}
              <button
                onClick={logout}
                className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              >
                Login
              </Link>
              <Link
                to="/signup"
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
