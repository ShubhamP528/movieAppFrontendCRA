import { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [room, setRoom] = useState("");
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("TheatorUser"));
    if (user?.room) {
      setRoom(user?.room);
    }
  }, [room]);

  const value = { room, setRoom };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
