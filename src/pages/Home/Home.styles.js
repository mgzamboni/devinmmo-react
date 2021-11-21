import styled from "styled-components";
import BackgroundImage from "../../assets/home-background.png";

export const LandingPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background: url(${BackgroundImage}) no-repeat center center fixed;
  background-size: cover;
`;

export const StyledHomePageTitle = styled.h2`
  font-size: 65px;
  color: #000;
  text-align: center;
  margin-bottom: 50px;
  padding: auto;
`;

export const StyledHomePageText = styled.p`
  align-self: center;
  font-size: 45px;
  color: #000;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10vh;
  padding: auto;
`;

export const StyledHomeButton = styled.button`
  cursor: pointer;
  font-weight: 800;
  font-size: 30px;
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.18);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 5px;
  color: rgba(0, 0, 0, 0.8);
  width: 20vw;
  max-width: 200px;
  height: 5rem;
  &:hover{
    font-weight: 800;
    color: rgba(255, 255, 255, 1);
    background-color:  rgba(0, 0, 0, 0.6);
    border: 1px solid rgba(50, 128, 220, 0.18);
    box-shadow: rgba(99, 99, 99, 0.6) 0px 2px 8px 0px;
  };
`;