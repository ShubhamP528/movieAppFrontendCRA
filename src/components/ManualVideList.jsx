import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthcontext } from "../Contexts/AuthContext";
import { useAppContext } from "../Contexts/AppContext";
import toast from "react-hot-toast";

const videos = [
  // {
  //   videoId: "lcew8idffea1ye8akdog",
  //   title: "Tohre Me Base Raja Humro Paranwa Ho Swati Mishra Bhojpuri",
  // },
  // { videoId: "nb4zntsdoke0ohjyzq99", title: "Maroon Color Sadiya" },
  // { videoId: "pvrtwkpkd7cqpsol4bk9", title: "Aayi Nai -Stree 2" },
  // {
  //   videoId: "l4qgcxjmoccox0vf5fpi",
  //   title: "Vaaste Song Dhvani Bhanushali Tanishk Bagchi",
  // },
  {
    videoId:
      "Chennai.Express.2013.480p.Bluray.Hindi.AAC5.1.x264.Esub-HDHub4u.Tv_evtwwg",
    title: "Chennai Express Full Movie",
  },
];

function ManualVideoList() {
  const navigate = useNavigate();
  const { TheatorUser } = useAuthcontext();

  const { room, setRoom, videoId, setVideoId } = useAppContext();

  const playHandle = (videoId) => {
    console.log(room);
    if (room) {
      setVideoId(videoId);
      navigate(`/manualVideo/${videoId}/${room}`);
      return;
    } else if (!TheatorUser) {
      navigate("/login");
      toast.error("please Login Fisrt");
      return;
    } else if (!room) {
      toast.error("Please Join Room First");
    }
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {videos.map((video) => (
        <div
          onClick={() => playHandle(video.videoId)}
          key={video.videoId}
          className="bg-white cursor-pointer rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden"
        >
          {/* Big area for video title */}
          <div className="flex-1 flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 h-40 sm:h-44 md:h-48 text-center text-lg sm:text-xl md:text-2xl font-bold text-gray-700 p-3 sm:p-4 line-clamp-3">
            {video.title}
          </div>

          {/* Bottom area for title again */}
          <div className="p-3 sm:p-4 border-t text-center text-base sm:text-lg font-semibold text-gray-800 bg-white line-clamp-2">
            {video.title}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ManualVideoList;
