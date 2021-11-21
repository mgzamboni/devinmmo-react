import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { StyledSliderContainer } from "./PicturesSlider.styles";

export const PicturesSlider = ({ gameTitle, screenshots }) => {
  const properties = {
    duration: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    indicators: (i) => (
      <img
        style={{ maxHeight: "10vh", width: "8vw", objectFit: "fill" }}
        key={screenshots[i].id}
        className="indicator"
        src={screenshots[i].image}
        alt={`${gameTitle}-${screenshots[i].id}-indicator`}
      />
    ),
  };

  return (
    <StyledSliderContainer>
      <Slide {...properties}>
        {screenshots
          ? screenshots.map((screenshot) => {
              return (
                <img
                  key={gameTitle + screenshot.id}
                  className="fullsize-indicator"
                  style={{
                    maxHeight: "50vh",
                    width: "100%",
                    objectfit: "fill",
                    backgroundColor: "#ccc",
                  }}
                  src={screenshot.image}
                  alt={`${gameTitle}-${screenshot.id}`}
                />
              );
            })
          : null}
      </Slide>
    </StyledSliderContainer>
  );
};
