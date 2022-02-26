import React, { useState } from "react";
import { BackgroundTab, Button, ThreeD } from "..";
import { motion } from "framer-motion";
import { FiBox, FiMapPin, FiPenTool, FiSun, FiType } from "react-icons/fi";
import { GoBrowser } from "react-icons/go";
import { BiPalette } from "react-icons/bi";
import Tooltip from "@mui/material/Tooltip";

const LeftBar = (props) => {
  const [x, setX] = useState(-350);
  const [sidebarProperty, setSidebarProperty] = useState("");

  const toggleSidebar = (property) => {
    if (property === sidebarProperty) {
      setX(-350);
      setSidebarProperty("");
    } else {
      setX(125);
      setSidebarProperty(property);
    }
  };

  const sidebarProperties = [
    {
      name: "3d",
      icon: <FiBox className="text-2xl text-gray-700" />,
    },
    {
      name: "Position",
      icon: <FiMapPin className="text-2xl text-gray-700" />,
    },
    {
      name: "Mockup",
      icon: <GoBrowser className="text-2xl text-gray-700" />,
    },
    {
      name: "Shadow",
      icon: <FiSun className="text-2xl text-gray-700" />,
    },
    {
      name: "Annotation",
      icon: <FiPenTool className="text-2xl text-gray-700" />,
    },
    {
      name: "Text",
      icon: <FiType className="text-2xl text-gray-700" />,
    },
    {
      name: "Background",
      icon: <BiPalette className="text-2xl text-gray-700" />,
    },
  ];
  return (
    <>
      <div className="w-[7%] min-w-[130px] h-full p-6 relative z-[15]">
        <div className="w-full h-full rounded-[1.5em] shadow-lg bg-[#FEFEFE] flex items-center justify-center flex-col z-5 relative border border-[#eee]">
          {sidebarProperties.map((property, index) => (
            <Button
              className="!block !my-2"
              key={index}
              onClick={() => toggleSidebar(property.name)}
              hoverScale={1.1}
            >
              <Tooltip title={property.name} placement="right" arrow>
                <div
                  className={`p-3 bg-[#EEF3F9] rounded-lg border-2 border-[#eee] transition duration-200 text-[#444] ${
                    sidebarProperty === property.name && "border-blue-500"
                  }`}
                >
                  {property.icon}
                </div>
              </Tooltip>
            </Button>
          ))}
        </div>
      </div>
      <motion.div
        animate={{
          x: x,
          y: 0,
          scale: 1,
          rotate: 0,
        }}
        transition={{ duration: 0.6 }}
        className="bg-white text-34xl h-[95vh] shadow-lg my-6 w-[35vh] absolute top-0 left-0 z-[10] rounded-[1.5em]"
      >
        {sidebarProperty === "Background" && <BackgroundTab {...props} />}
        {sidebarProperty === "3d" && <ThreeD {...props} />}
      </motion.div>
    </>
  );
};

export default LeftBar;
