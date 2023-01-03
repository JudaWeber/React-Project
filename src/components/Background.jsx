// import video from "../assets/videos/video-3.mp4";
import image from "../assets/images/img-2.jpg";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Background = () => {
  return (
    <div className="backgroundContainer">
      <img className="my-video-100" src={image} alt="background photo" />
    </div>
  );
};

export default Background;
