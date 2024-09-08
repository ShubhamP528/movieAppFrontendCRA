import React from "react";
import YouTubeVideoCard from "./YoutubeVideoCard";

const VideoGrid = ({ videos }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 ">
      {videos.map((video, index) => (
        <div key={index}>
          <YouTubeVideoCard video={video} />
        </div>
      ))}
      {/* Add an element to observe for intersection */}
      <div className="observe-end"></div>
    </div>
  );
};

export default VideoGrid;
