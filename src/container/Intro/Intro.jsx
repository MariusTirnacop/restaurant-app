import { useRef, useState } from "react";

import { BsFillPlayFill } from "react-icons/bs";
import { meal } from "../../constants/";

import "./Intro.css";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef();

  const handleVideo = () => {
    if (playVideo) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlayVideo(!playVideo);
  };

  return (
    <div className="app__video">
      <video src={meal} type="video.mp4" loop controls={false} muted ref={videoRef} />

      <div className="app__video-overlay flex__center" onClick={handleVideo}>
        <div className={`${!playVideo && "app__video-overlay_circle"} flex__center`}>
          {!playVideo && <BsFillPlayFill color="#fff" fontSize={30} />}
        </div>
      </div>
    </div>

    // 1:56:17
  );
};

export default Intro;
