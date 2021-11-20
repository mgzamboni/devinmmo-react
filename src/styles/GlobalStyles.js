import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body {
    height: 100vh;
    font-size: 18px;
    font-family: "Montserrat", sans-serif;
}

/* .react-slideshow-container {
    margin: 0px auto;
    height: "auto";
    width: 75vw;
    max-width: 1200px;
}

.react-slideshow-container+ul.indicators {
    width: 50vw;
    justify-content: left;
} */

.react-slideshow-container+ul.indicators {
    justify-content: left;
    align-items: center;
    margin-top: 10px;
    height: 100%;
}

div.react-slideshow-wrapper.slide {
    height: 100%;
    width: 100%;
}

div.images-wrap {
    width: 60vw;
    align-items: center;
    div.active {
        width: 100%;
    }
    img.fullsize-indicator {
        height: 100%;
        object-fit: contain;
    }
}

.indicator {
    margin-right: 10px;
    cursor: pointer;
    width: 10vw;
}

.indicator.active {
    border: 5px rgba(0,0,0,0.32) solid;
    height: auto;
    width: 10vw;
    padding: 5px;
}
`;
