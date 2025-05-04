import { createContext, useContext, useEffect, useReducer } from "react";
import { NODE_API_ENDPOINT } from "../utils/utils";
import socket from "../connection";
export const AuthContext = createContext();

const authReducer = (state, action) => {
  console.log(action.payload);

  switch (action.type) {
    case "LOGIN":
      return {
        TheatorUser: action.payload,
      };
    case "LOGOUT":
      return { TheatorUser: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { TheatorUser: null });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("TheatorUser"));
    console.log(user);

    const getUserDetails = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("TheatorUser"));
        console.log(user);
        if (
          user?.message === "jwt expired" ||
          user?.message === "jwt malformed"
        ) {
          localStorage.removeItem("TheatorUser");
          dispatch({ type: "LOGOUT" });
          return;
        }
        if (!user) throw new Error("No token found");
        await fetch(`${NODE_API_ENDPOINT}/api/auth/verify`, {
          method: "POST",
          headers: { Authorization: `Bearer ${user?.token}` },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data?.message === "jwt expired") {
              localStorage.removeItem("TheatorUser");
              dispatch({ type: "LOGOUT" });
              return;
            }
            localStorage.setItem("TheatorUser", JSON.stringify(data));
            dispatch({ type: "LOGIN", payload: data });

            console.log(data);
            console.log(data?.sessionType);

            if (data?.sessionType === "youTube") {
              console.log("calling for YT");
              if (data?.room) {
                socket.emit("joinRoom", { room: data?.room });
              }
            } else {
              if (data?.room) {
                socket.emit("manualSessions-joinRoom", { room: data?.room });
              }
            }
          })
          .catch((error) => {
            console.log(error);
            localStorage.removeItem("TheatorUser");
            dispatch({ type: "LOGOUT" });
          });
      } catch (error) {
        console.log(error);
        localStorage.removeItem("TheatorUser");
        dispatch({ type: "LOGOUT" });
        return;
      }
    };

    getUserDetails();

    // if (user) {
    //   dispatch({ type: "LOGIN", payload: user });
    // }
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthcontext = () => {
  return useContext(AuthContext);
};
