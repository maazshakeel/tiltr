import React, { useState } from "react";
import { Sidebar, Main, LeftBar } from "../components";

const App = () => {
  const [imgBlob, setImgBlob] = useState();
  const [children, setChildren] = useState([]);
  const [data, setData] = useState({
    background: {
      color1: "#00F3FF",
      color2: "#3524FF",
      direction: 45,
    },
    threeD: {
      x: 0,
      y: 0,
      z: 0,
    },
    position: {
      x: 12,
      y: 20,
    },
    others: {
      opacity: 100,
      scale: 110,
      shadow: 0,
      border: {
        width: 1,
        color: "#247CD2",
      },
      border_radius: 30,
    },
    mockup: "normal",
  });

  const props = { data, setData, imgBlob, setImgBlob, children, setChildren };
  return (
    <div className="bg-[#ECF2F5] h-screen w-screen overflow-hidden flex text-[#444]">
      <LeftBar {...props} />
      <Main {...props} />
      <Sidebar {...props} />
    </div>
  );
};

export default App;
