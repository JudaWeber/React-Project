// import video from "../assets/videos/video-3.mp4";
import image from "../assets/images/img-2.jpg";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Background = () => {
  return (
    <div className="videoContainer">
      <img className="my-video-100" src={image} autoPlay loop muted />
    </div>
  );
};

export default Background;
