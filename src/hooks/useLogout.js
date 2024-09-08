// import { useNavigate } from "react-router-dom";
import { useAppContext } from "../Contexts/AppContext";
import { useAuthcontext } from "../Contexts/AuthContext";
import toast from "react-hot-toast";

export const useLogout = () => {
  const { dispatch } = useAuthcontext();
  const { setRoom } = useAppContext();
  // const navigate=useNavigate()

  const logout = () => {
    // remove user form local storage

    localStorage.removeItem("TheatorUser");

    toast.success("Successfully logout");
    // dispatch logout action
    dispatch({ type: "LOGOUT" });
    setRoom("");
    // navigate('/home')
  };

  return { logout };
};
