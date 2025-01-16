import { useEffect, useRef, useState } from "react";

const Video: React.FC<{ videoSource: string }> = ({ videoSource }) => {
  const [fading, setFading] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    setFading(true);
    setTimeout(() => {
      setFading(false);
    }, 300);
  }, [videoSource]); // Trigger effect when video source changes

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        className={`background-video ${fading ? "fading" : ""}`}
        autoPlay
        loop
        muted
        key={videoSource}
      >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
