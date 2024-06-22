"use client";

import dynamic from "next/dynamic";
import React from "react";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const VideoPlayer = () => {
  return (
    <div className="hidden md:w-full md:flex-center">
      <ReactPlayer
        playing={true}
        url="assets/videos/user_scola_2.mp4"
        width={"60%"}
        height={"60%"}
        muted={true}
      />
    </div>
  );
};

export default VideoPlayer;
