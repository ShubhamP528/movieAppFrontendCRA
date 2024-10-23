import { useState } from "react";
import { useAuthcontext } from "../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAppContext } from "../Contexts/AppContext";
import { NODE_API_ENDPOINT } from "../utils/utils";

export const useSignin = () => {
  const [errorL, setErrorL] = useState(null);
  const [isLoadingL, setIsLoadingL] = useState(null);
  const { dispatch } = useAuthcontext();
  const { setRoom } = useAppContext();

  const navigate = useNavigate();

  const signin = async (email, password) => {
    setIsLoadingL(true);
    setErrorL(null);
    try {
      const response = await fetch(`${NODE_API_ENDPOINT}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const json = await response.json();
      console.log(json);

      if (!response.ok) {
        toast.error(json.error);
        setIsLoadingL(false);
        setErrorL(json.error);
      }

      if (response.ok) {
        // save the user to local storage
        localStorage.setItem("TheatorUser", JSON.stringify(json));

        toast.success("Successfully login");
        // update the auth context
        dispatch({ type: "LOGIN", payload: json });
        setRoom(json.room);

        setIsLoadingL(false);
        navigate("/");
      }
    } catch (err) {
      setIsLoadingL(false);
      setErrorL(err.message);
    }
  };

  return { signin, isLoadingL, errorL };
};
