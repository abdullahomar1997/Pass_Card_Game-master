import React from "react";
// import "./Header.css";
import { ImMenu3 } from "react-icons/im";
import styled from "styled-components";
import { AiOutlineRollback, AiOutlineFullscreen } from "react-icons/ai";

const Header = () => {
  // var time = 600;

  // function countdown() {
  //   var min = Math.floor(time(60));
  //   var sec = time % 60;
  //   var count = document.getElementById("countdown");
  //   count.innerHTML = `${min}:${sec}`;

  //   time--;
  // }

  // setInterval(countdown, 1000);

  // const maximizableElement = React.useRef(null);
  // let isFullscreen, setIsFullscreen;
  // let errorMessage;

  // let backgroundColor = "#efefef";

  // try {
  //   [isFullscreen, setIsFullscreen] = useFullscreenStatus(maximizableElement);
  // } catch (e) {
  //   errorMessage = "Fullscreen not supported";
  //   isFullscreen = false;
  //   setIsFullscreen = undefined;
  // }

  // const handleExitFullscreen = () => document.exitFullscreen();


  return (
    <HeaderContainer>
      <HeaderIcon>
        <ImMenu3 size={"1.5rem"} />
      </HeaderIcon>
      <HeaderIcon>
        <AiOutlineRollback size={"1.5rem"} />
      </HeaderIcon>
      <HeaderText>
        <Title>Easy</Title>
        <div></div>
        <Countdown id="countdown"></Countdown>
      </HeaderText>
      <HeaderIcon>
        <AiOutlineFullscreen size={"1.5rem"} />
      </HeaderIcon>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  background: var(--color-bg);
  display: grid;
  grid-template-columns: 70px 70px auto 70px;
  /* align-content: center; */
  align-items: center;
  /* font-size: 1.5rem; */
  font-size: 1rem;
  height: 60px;
  width: 100vw; 
  /* padding: 0 1rem; */

  @media screen and (max-device-width: 480px) and (orientation: portrait) {
    display: none;
    background-color: red;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 320px) {
    font-size: 0.7rem;
  }

`;

const HeaderIcon = styled.div`
  /* padding: 0.5rem; */
  text-align: center;
`;

const HeaderText = styled.div`
  /* display: flex;
  justify-content: space-between;
  font-size: 1rem;
  text-decoration: none;
  text-align: center;
  align-items: center; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

const Title = styled.div`
  /* font-size: 1.5rem; */
  /* font-weight: bold; */
`;

const Countdown = styled.div``;

