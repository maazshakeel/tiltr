import React, { useState } from "react";
import { Sidebar, Main, LeftBar } from "../components";

const App = () => {
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
      x: 0,
      y: 0,
    },
  });

  const props = { data, setData };
  return (
    <div className="bg-[#ECF2F5] h-screen w-screen overflow-hidden flex text-[#444]">
      <LeftBar {...props} />
      <Main {...props} />
      <Sidebar {...props} />
    </div>
  );
};

export default App;
