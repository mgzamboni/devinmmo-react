import "react-slideshow-image/dist/styles.css";
import React from "react";
import { Slide } from "react-slideshow-image";
import "./PicturesSlider.styles.css";

export const PicturesSlider = ({ gameTitle, screenshots }) => {
  console.log(screenshots);

  const style = {
    height: "auto",
    width: "60%",
    minWidth: "500px",
  };

  const properties = {
    duration: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    indicators: (i) => (
      <img
        key={screenshots[i].id}
        className="indicator"
        style={{
          height: "9vh",
          width: "15vh",
          margin: "0px 10px",
          objectfit: "cover",
          minWidth: "100px",
        }}
        src={screenshots[i].image}
        alt={`${gameTitle} - ${screenshots[i].id}`}
      />
    ),
  };

  return (
    <div>
      <div>
        <Slide {...properties}>
          {screenshots
            ? screenshots.map((screenshot) => {
                return (
                  <div style={style} key={gameTitle + screenshot.id}>
                    <img
                      style={{
                        height: "auto",
                        width: "100%",
                        objectfit: "cover",
                      }}
                      src={screenshot.image}
                      alt={`${gameTitle} - ${screenshot.id}`}
                    />
                  </div>
                );
              })
            : null}
        </Slide>
      </div>
    </div>
  );
};
