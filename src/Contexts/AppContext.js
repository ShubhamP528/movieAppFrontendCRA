import { createContext, useContext, useState } from "react";
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [room, setRoom] = useState("");
  const [videoId, setVideoId] = useState("");
  const [users, setUsers] = useState("");
  const [type, setType] = useState("");

  const value = {
    room,
    setRoom,
    videoId,
    setVideoId,
    users,
    setUsers,
    type,
    setType,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
