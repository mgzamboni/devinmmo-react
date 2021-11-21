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

.react-slideshow-container+ul.indicators {
    justify-content: left;
    align-items: center;
    margin-top: 10px;
    height: 100%;
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
}

.indicator.active {
    border: 5px rgba(0,0,0,0.32) solid;
    padding: 5px;
}
`;
