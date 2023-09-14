import React from "react";
import Board from "./components/board/Board";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Settings from "./components/menu/settings/Settings";
import New from "./components/board/New";
import styled from "styled-components";
// import CheckBoxDayNight from "./Extra/CheckBoxDayNight";
// import Home from "./components/Home";

const App = () => {
  return (
    <AppContainer>
      {/* <Home/> */}
      {/* <Header /> */}
      <Board />
      {/* <New/> */}
      {/* <Settings/> */}
      {/* <CheckBoxDayNight/> */}
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  text-align: center;
  color: #fff;
  background-color: rgb(13,22,29);
  height: 100vh;
`
