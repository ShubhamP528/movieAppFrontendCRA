import React, { useState } from "react";
import { extractYouTubeVideoId } from "../constant";
import { useAuthcontext } from "../Contexts/AuthContext";
import { useAppContext } from "../Contexts/AppContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const PlayByLinkForm = ({ onClose }) => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const { room, setRoom } = useAppContext();

  const { TheatorUser } = useAuthcontext();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // For example, you can submit the input value to a backend endpoint
    console.log("Submitted value:", inputValue);

    const videoId = extractYouTubeVideoId(inputValue);
    if (videoId === null) {
      toast.error("Please enter valid link");
      return;
    }
    console.log(videoId, TheatorUser?.username);
    navigate(`/video/${videoId}/${room}`);
    // Close the alert form
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50"></div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="bg-white rounded-lg p-4 sm:p-8 max-w-md w-full mx-4">
          <div className="flex justify-between">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">
              Hay! Play by link
            </h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-2 sm:mb-4">
              <label
                htmlFor="input"
                className="block text-sm sm:text-base text-gray-700 font-bold"
              >
                Enter Youtube Video Link
              </label>
              <input
                type="text"
                id="input"
                className="border p-1 form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-sm sm:text-base"
                value={inputValue}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 sm:py-2 px-3 sm:px-4 rounded mr-2"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 sm:py-2 px-3 sm:px-4 rounded"
              >
                Play
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlayByLinkForm;
