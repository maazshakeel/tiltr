import { Tooltip } from "@mui/material";
import domtoimage from "dom-to-image";
import html2canvas from "html2canvas";
import React from "react";
import { BiCommand } from "react-icons/bi";
import { FiCopy, FiDownload, FiTwitter, FiUpload } from "react-icons/fi";
import { Button } from "..";

const Sidebar = ({ imgBlob, setImgBlob }) => {
  const handleImageUpload = (e) => {
    var reader = new FileReader();
    var baseString;
    reader.onloadend = function () {
      baseString = reader.result;
      setImgBlob(baseString);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const addInnerHtml = () => {
    const coverImage = document.querySelector("#cover_image_download");

    coverImage.innerHTML = document.getElementById(
      "cover_image_preview"
    ).innerHTML;
  };

  // download image as a .png
  const download = () => {
    addInnerHtml();

    domtoimage
      .toPng(document.querySelector("#cover_image_download"))
      .then(function (dataUrl) {
        const a = document.createElement("a");

        a.href = dataUrl;
        a.download = "screenshot.png";
        a.click();
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  };

  const copyImage = () => {
    addInnerHtml();

    domtoimage
      .toBlob(document.querySelector("#cover_image_download"))
      .then(function (dataUrl) {
        navigator.clipboard.write([
          new ClipboardItem({
            "image/png": dataUrl,
          }),
        ]);
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  };

  return (
    <div className="h-full w-[22%] p-6">
      <div className="w-full h-full rounded-[1.5em] shadow-lg bg-white relative">
        <div className="border-t border-[#ddd] absolute bottom-0 left-0 w-full p-4 px-6">
          {imgBlob ? (
            <>
              <Button className="!w-full" scale={0.95} onClick={download}>
                <div className="bg-blue-600 py-[10px] px-3 rounded-2xl flex items-center justify-between text-white capitalize font-semibold">
                  <div className="flex items-center ml-3">
                    <FiDownload className="text-xl mr-3" />
                    Download
                  </div>
                  <div className=" p-2 py-1 text-[#ffffff90] rounded-md flex items-center">
                    <BiCommand className="mr-1" />S
                  </div>
                </div>
              </Button>
              <Button
                className="!w-full !mt-2"
                scale={0.95}
                onClick={copyImage}
              >
                <div className="bg-[#EEF3F9] py-[8px] px-[10px] rounded-2xl flex items-center justify-between text-[#444] capitalize font-semibold border-2 border-[#00000010]">
                  <div className="flex items-center ml-3">
                    <FiCopy className="text-xl mr-3" />
                    Copy Image
                  </div>
                  <div className=" p-2 py-1 text-[#00000060] rounded-md flex items-center">
                    <BiCommand className="mr-1" />C
                  </div>
                </div>
              </Button>
              <a
                href="https://twitter.com/saviomartin7"
                className="flex items-center text-center justify-center mt-3 text-sm text-[#55555597] font-[400] hover:text-[#444] transition duration-500"
              >
                Share to Twitter <FiTwitter className="ml-2" />
              </a>
            </>
          ) : (
            <>
              <Button className="!w-full" scale={0.95} type="file">
                <input
                  type="file"
                  name="screenshot"
                  id="screenshot"
                  className="hidden"
                  onChange={handleImageUpload}
                  accept="image/png, image/jpeg"
                />
                <label
                  htmlFor="screenshot"
                  className="bg-blue-600 py-[10px] px-3 rounded-2xl flex items-center justify-between text-white capitalize font-semibold cursor-pointer"
                >
                  <div className="flex items-center ml-3">
                    <FiUpload className="text-xl mr-3" />
                    Upload Image
                  </div>
                  <div className=" p-2 py-1 text-[#ffffff90] rounded-md flex items-center">
                    <BiCommand className="mr-1" />V
                  </div>
                </label>
              </Button>
              <a className="flex items-center text-center justify-center mt-3 text-[16px] text-[#555555] font-[400] hover:text-[#444] transition duration-500">
                Or Paste the Copied Image
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
