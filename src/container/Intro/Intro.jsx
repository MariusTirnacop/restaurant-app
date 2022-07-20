import { useRef, useState } from "react";

import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants/";

import "./Intro.css";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef();

  return (
    <div className="app__video">
      <video src={meal} type="video.mp4" loop controls={false} muted ref={videoRef} />

      <div className="app__video-overlay flex__center">
        <div className="app__video-overlay_circle"></div>
      </div>
    </div>

    // 1:56:17
  );
};

export default Intro;
