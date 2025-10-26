import React, { useState, useEffect, useRef } from "react";
import socket from "../connection"; // Import the central socket instance
import { useParams, useNavigate } from "react-router-dom";
import { useAuthcontext } from "../Contexts/AuthContext";
import Chat from "./Chat";
import ReactPlayer from "react-player";
import { useAppContext } from "../Contexts/AppContext";

function ManualVideo() {
  const { id, room } = useParams();
  const [sessionId, setSessionId] = useState(room);
  const [player, setPlayer] = useState(null);
  const [host, setHost] = useState(null); // State to maintain the host
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(true);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [pendingSync, setPendingSync] = useState(null);

  const playerRef = useRef(null);
  const { TheatorUser } = useAuthcontext();
  const navigate = useNavigate();

  const { videoId, setVideoId } = useAppContext();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("TheatorUser"));
    console.log(user);
    if (!user) {
      navigate("/login");
    }
  }, [TheatorUser, navigate]);

  useEffect(() => {
    socket.emit("manualSessions-newuser", { sessionId, videoId });

    socket.on("manualSessions-control", (data) => {
      if (playerRef.current) {
        switch (data.action) {
          case "play":
            setPlaying(true);
            playerRef.current.seekTo(data.time, "seconds");
            break;
          case "pause":
            setPlaying(false);
            break;
          case "seek":
            playerRef.current.seekTo(data.time, "seconds");
            break;
          default:
            console.log("Unknown action");
        }
      }
    });

    socket.on("manualSessions-newUserJoined", () => {
      if (playerRef.current) {
        const currentTime = playerRef.current.getCurrentTime();
        const action = playing ? "play" : "pause";
        console.log(action);

        // Emit the current state and time
        socket.emit("manualSessions-currentState", {
          videoId,
          sessionId,
          action,
          time: currentTime,
        });
      }
    });

    // Handle new host notification
    socket.on("manualSessions-newHost", ({ newHost }) => {
      console.log(`New host selected: ${newHost}`);
      setHost(newHost);
      socket.emit("manualSessions-requestInitialPlaybackTime", { sessionId });
    });

    // Handle receiving the current state from the server
    socket.on("manualSessions-currentState", ({ action, time }) => {
      console.log(`Received current state: action=${action}, time=${time}`);
      console.log(playerRef.current);
      setPendingSync({ action, time });
      if (playerRef.current) {
        playerRef.current.seekTo(time, "seconds");
        if (action === "play") {
          setPlaying(true);
        } else if (action === "pause") {
          setPlaying(false);
        }
      }
    });

    socket.on("manualSessions-videoChange", ({ vId, action, time }) => {
      console.log(vId, action, time);
      setVideoId(vId);
      if (playerRef.current) {
        playerRef.current.seekTo(time, "seconds");
        setPlaying(action === "play");
      }
    });

    socket.on("manualSessions-changePlaybackSpeed-ans", (rate) => {
      console.log("Playback speed changed to: ", rate);
      setPlaybackRate(rate);
    });

    socket.on("manualSessions-playerMuteChange-ans", ({ isMuted }) => {
      setMuted(isMuted);
    });

    socket.on("manualSessions-playerVolumeChange-ans", ({ volume }) => {
      setVolume(volume);
    });

    return () => {
      socket.off("manualSessions-control");
      socket.off("manualSessions-newuser");
      socket.off("manualSessions-newUserJoined");
      socket.off("manualSessions-newHost");
      socket.off("manualSessions-currentState");
      socket.off("manualSessions-requestInitialPlaybackTime");
      socket.off("manualSessions-videoChange");
      socket.off("manualSessions-changePlaybackSpeed-ans");
      socket.off("manualSessions-playerMuteChange-ans");
      socket.off("manualSessions-playerVolumeChange-ans");
    };
  }, [sessionId, videoId, playing, setVideoId]);

  const onPlayerReady = () => {
    console.log("Player is ready");
    setPlayer(playerRef.current);
    if (pendingSync && playerRef.current) {
      playerRef.current.seekTo(pendingSync.time, "seconds");
      setPlaying(pendingSync.action === "play");
      setPendingSync(null);
    }
  };

  // For ReactPlayer's onProgress callback
  const handleProgress = (state) => {
    // This function is called periodically during playback
    // You can use it to sync other users if needed
  };

  // Example button handlers
  const playVideo = () => {
    const currentTime = playerRef.current?.getCurrentTime() || 0;
    setPlaying(true);
    socket.emit("manualSessions-play", { sessionId, time: currentTime });
  };

  const pauseVideo = () => {
    const currentTime = playerRef.current?.getCurrentTime() || 0;
    setPlaying(false);
    socket.emit("manualSessions-pause", { sessionId, time: currentTime });
  };

  const seekForward = () => {
    if (!playerRef.current) return;
    const currentTime = playerRef.current.getCurrentTime() || 0;
    const newTime = currentTime + 30;
    playerRef.current.seekTo(newTime, "seconds");
    socket.emit("manualSessions-seek", { sessionId, time: newTime });
  };

  const seekBackward = () => {
    if (!playerRef.current) return;
    const currentTime = playerRef.current.getCurrentTime() || 0;
    const newTime = Math.max(0, currentTime - 30);
    playerRef.current.seekTo(newTime, "seconds");
    socket.emit("manualSessions-seek", { sessionId, time: newTime });
  };

  const handleMuteChange = () => {
    const newMuteState = !muted;
    setMuted(newMuteState);
    socket.emit("manualSessions-playerMuteChange", {
      sessionId,
      isMuted: newMuteState,
    });
  };

  const handleVolumeChange = (newVolume) => {
    setVolume(newVolume);
    socket.emit("manualSessions-playerVolumeChange", {
      sessionId,
      volume: newVolume,
    });
  };

  const changePlaybackSpeed = (newRate) => {
    setPlaybackRate(newRate);
    socket.emit("manualSessions-changePlaybackSpeed", {
      sessionId,
      rate: newRate,
    });
  };

  // Handle player events
  const handlePlay = () => {
    if (!playing) {
      const currentTime = playerRef.current?.getCurrentTime() || 0;
      setPlaying(true);
      socket.emit("manualSessions-play", { sessionId, time: currentTime });
    }
  };

  const handlePause = () => {
    if (playing) {
      const currentTime = playerRef.current?.getCurrentTime() || 0;
      setPlaying(false);
      socket.emit("manualSessions-pause", { sessionId, time: currentTime });
    }
  };

  return (
    <div className="flex flex-col gap-16 md:flex-row h-fit">
      <div className="w-full md:w-2/4 h-96 md:h-full">
        <ReactPlayer
          ref={playerRef}
          // url={`https://res.cloudinary.com/dgsjppp4a/video/upload/v1745656570/Shubham/${videoId}.mp4`}
          // url={`https://res.cloudinary.com/dyuov6i8c/video/upload/v1753409201/${videoId}.mp4`}
          url="https://res.cloudinary.com/dyuov6i8c/video/upload/f_auto,q_auto/v1761475596/Ek.Deewane.ki.Deewaniyat.2025.HQ-V2.480p.HDTC.Hindi-Line.x264-HDHub4u.Ms_yzfjhn.mp4"
          playing={playing}
          volume={volume}
          muted={muted}
          playbackRate={playbackRate}
          onReady={onPlayerReady}
          onPlay={handlePlay}
          onPause={handlePause}
          onProgress={handleProgress}
          onPlaybackRateChange={changePlaybackSpeed}
          width="100%"
          height="100%"
          controls={true}
        />
        <div className="border-t border-gray-300 pt-4 flex justify-center gap-1 my-3">
          <button
            className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white max-[640px]:text-xs sm:text-base md:text-sm p-1 font-bold lg:py-2 lg:px-4 rounded-full lg:m-2 md:py-1 md:px-3 md:m-1"
            onClick={playVideo}
          >
            Play
          </button>
          <button
            className="cursor-pointer bg-green-500 hover:bg-green-600 text-white max-[640px]:text-xs sm:text-base md:text-sm p-1 font-bold lg:py-2 lg:px-4 rounded-full lg:m-2 md:py-1 md:px-3 md:m-1"
            onClick={pauseVideo}
          >
            Pause
          </button>
          <button
            className="cursor-pointer bg-yellow-500 hover:bg-yellow-600 text-white max-[640px]:text-xs sm:text-base md:text-sm p-1 font-bold lg:py-2 lg:px-4 rounded-full lg:m-2 md:py-1 md:px-3 md:m-1"
            onClick={seekBackward}
          >
            Seek backward 30s
          </button>
          <button
            className="cursor-pointer bg-red-500 hover:bg-red-600 text-white max-[640px]:text-xs sm:text-base md:text-sm p-1 font-bold lg:py-2 lg:px-4 rounded-full lg:m-2 md:py-1 md:px-3 md:m-1"
            onClick={seekForward}
          >
            Seek forward 30s
          </button>
        </div>
        {/* <div className="flex justify-center gap-2 my-2">
          <button
            className="cursor-pointer bg-purple-500 hover:bg-purple-600 text-white max-[640px]:text-xs sm:text-base md:text-sm p-1 font-bold rounded-full md:py-1 md:px-3"
            onClick={handleMuteChange}
          >
            {muted ? "Unmute" : "Mute"}
          </button>
          <div className="flex items-center">
            <span className="mr-2 text-sm">Speed:</span>
            <select
              value={playbackRate}
              onChange={(e) => changePlaybackSpeed(parseFloat(e.target.value))}
              className="bg-gray-100 border border-gray-300 rounded px-2 py-1 text-sm"
            >
              <option value="0.5">0.5x</option>
              <option value="1">1x</option>
              <option value="1.5">1.5x</option>
              <option value="2">2x</option>
            </select>
          </div>
        </div> */}
      </div>
      <div className="w-full md:w-2/4 h-96 text-wrap">
        <Chat />
      </div>
    </div>
  );
}

export default ManualVideo;
