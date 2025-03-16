import { createContext, useContext, useEffect, useState } from "react";
import socket from "../connection";
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [room, setRoom] = useState("");
  const [videoId, setVideoId] = useState("");
  const [users, setUsers] = useState("");
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("TheatorUser"));
    if (user?.room) {
      setRoom(user?.room);
      socket.emit("joinRoom", { room: user?.room });
    }
  }, [room]);

  const value = { room, setRoom, videoId, setVideoId, users, setUsers };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
