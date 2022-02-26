import React from "react";
import { FiBox } from "react-icons/fi";
import Slider from "@mui/material/Slider";

const ThreeD = ({ data, setData }) => {
  return (
    <div className="p-7 overflow-x-hidden">
      <div className="flex items-center">
        <FiBox className="text-2xl  text-[#666]" />{" "}
        <h2 className="text-2xl ml-2 font-[500]  text-[#666]">3d</h2>{" "}
      </div>
      <div className="bg-[#cccccc] mt-2 rounded-xl w-full h-[1px] mb-6"></div>
      <div className="flex items-center mt-2">
        <h3 className="text-gray-600">Tilt X:</h3>
        <input
          value={data.threeD.x}
          onChange={(e) =>
            setData({
              ...data,
              threeD: {
                ...data.threeD,
                x: e.target.value,
              },
            })
          }
          className="bg-[#EEF3F9] border-2 border-[#00000020] rounded-lg w-10 text-center ml-3 outline-none"
        />
      </div>
      <Slider
        value={data.threeD.x}
        valueLabelDisplay="auto"
        onChange={(e) =>
          setData({
            ...data,
            threeD: {
              ...data.threeD,
              x: e.target.value,
            },
          })
        }
        min={-50}
        max={50}
      />
      <div className="flex items-center mt-4">
        <h3 className="text-gray-600">Tilt Y:</h3>
        <input
          value={data.threeD.y}
          onChange={(e) =>
            setData({
              ...data,
              threeD: {
                ...data.threeD,
                y: e.target.value,
              },
            })
          }
          className="bg-[#EEF3F9] border-2 border-[#00000020] rounded-lg w-10 text-center ml-3 outline-none"
        />
      </div>
      <Slider
        value={data.threeD.y}
        valueLabelDisplay="auto"
        onChange={(e) =>
          setData({
            ...data,
            threeD: {
              ...data.threeD,
              y: e.target.value,
            },
          })
        }
        min={-50}
        max={50}
      />
      <div className="flex items-center mt-4">
        <h3 className="text-gray-600">Tilt Z:</h3>
        <input
          value={data.threeD.z}
          onChange={(e) =>
            setData({
              ...data,
              threeD: {
                ...data.threeD,
                z: e.target.value,
              },
            })
          }
          className="bg-[#EEF3F9] border-2 border-[#00000020] rounded-lg w-10 text-center ml-3 outline-none"
        />
      </div>
      <Slider
        value={data.threeD.z}
        valueLabelDisplay="auto"
        onChange={(e) =>
          setData({
            ...data,
            threeD: {
              ...data.threeD,
              z: e.target.value,
            },
          })
        }
        min={-50}
        max={50}
      />
    </div>
  );
};

export default ThreeD;
