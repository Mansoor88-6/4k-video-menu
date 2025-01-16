
import { useState } from "react";
import Video from "./video";
import "./App.css";

function App() {

  const [videoSource, setVideoSource] = useState('./dolphin.mp4');

  const videos = [
    { label: 'Dolphins', source: './dolphin.mp4' },
    { label: 'Lion', source: './lion.mp4'},
    { label: 'Black Panther', source: './panther.mp4' },
    { label: 'Penguins', source: './penguin.mp4' },
  ];

  const handleVideoChange = (source: string) => {
    setVideoSource(source);
  };

  return (
    <div className="App">
      <Video videoSource={videoSource} />

      <div className="menu">
        <div className="list">
          <ul className="menu-list">
          {videos.map((video, index) => (
            <li onMouseOver={() => handleVideoChange(video.source)} className="list-item" key={index} >
              {video.label}
            </li>
          ))}
          </ul>

        </div>
      </div>
    </div>
  );
}

export default App;
