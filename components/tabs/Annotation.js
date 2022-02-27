import React from "react";
import { FiCircle, FiPenTool } from "react-icons/fi";
import { Button } from "..";

const Annotation = ({ children, setChildren }) => {
  const addCircle = () => {
    setChildren([
      ...children,
      {
        component: <FiCircle className="h-[100%] w-[100%]" />,
      },
    ]);
  };
  return (
    <div className="p-7 overflow-x-hidden">
      <div className="flex items-center">
        <FiPenTool className="text-2xl  text-[#666]" />{" "}
        <h2 className="text-2xl ml-2 font-[500]  text-[#666]">Annotation</h2>{" "}
      </div>
      <div className="bg-[#cccccc] mt-2 rounded-xl w-full h-[1px] mb-6"></div>
      <div className="flex items-center flex-wrap">
        <Button onClick={addCircle}>
          <div className="border-2 border-[#cccccc40] p-4 bg-[#ECF1F7] rounded-2xl">
            <FiCircle className="h-[80px] w-[80px]" />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Annotation;
