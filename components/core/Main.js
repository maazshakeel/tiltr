import React, { useEffect } from "react";

const Main = ({ data, setData }) => {
  // resize cover image to fit the view
  const resizeCoverImage = () => {
    const cover_image = document.querySelector("#cover_image_preview");
    const container = document.querySelector(".container");

    // get width and height of cover_image
    const maxWidth = cover_image.offsetWidth;
    const maxHeight = cover_image.offsetHeight;

    // get width and height of window
    const width = container.offsetWidth;
    const height = container.offsetHeight;

    let scale; // scale to be used

    // early exit
    if (width >= maxWidth && height >= maxHeight) {
      cover_image.style.transform = "";
      return;
    }

    scale = Math.min(width / maxWidth, height / maxHeight); // trick to get scale

    cover_image.style.transform = `scale(${scale})`; // transform scale applied
  };

  // useEffect to control window resize and all
  useEffect(() => {
    resizeCoverImage();

    window.addEventListener("resize", resizeCoverImage);
  });

  return (
    <div className="h-full w-[71%]">
      <div className="h-full overflow-hidden w-full relative flex items-center justify-center container z-[0]">
        <div className="scale-[.85] z-[0]">
          <div
            id="cover_image_preview"
            className="relative cover_image overflow-hidden select-none rounded-[2em] z-[0]"
            style={{
              background: `linear-gradient(${data.background.direction}deg, ${data.background.color1}, ${data.background.color2})`,
            }}
          >
            <img
              src="/sleepiest-screenshot.png"
              alt=""
              style={{
                transform: `rotateX(${data.threeD.x}deg) rotateY(${data.threeD.y}deg) rotateZ(${data.threeD.z}deg)`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
