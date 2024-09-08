import React, { useState } from "react";
import AlertForm from "./AlertForm";

const Temp = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        onClick={handleShowAlert}
      >
        Show Alert Form
      </button>
      {showAlert && <AlertForm onClose={handleCloseAlert} />}
    </div>
  );
};

export default Temp;
