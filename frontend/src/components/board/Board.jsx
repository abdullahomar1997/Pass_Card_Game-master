import React, { useEffect, useState } from "react";
import MyDeck from "./userDeck/UserDeck";
import Played from "./played/Played";
import cards from "../../constants/cards";
import assignCards from "../../utils/assignCards";
import createPlayers from "../../utils/createPlayers";
import CpuDeck from "./userDeck/CpuDeck";
import styled from "styled-components";

const Board = () => {

  let numberOfPlayers = 4;

  const [players, setPlayers] = useState(createPlayers(numberOfPlayers));

  const [boardDeck, setBoardDeck] = useState(assignCards(players, cards()));

useEffect(() => {
  for (let i = 0; i < players.length; ++i) {
    players[i].numCards = boardDeck.filter(
      (c) => c.player === i.toString()
    ).length;
  }
}, []);


  return (
    <BoardContainer>
      <PlayerContainer className="player1">
        <MyDeck
          boardDeck={boardDeck}
          setBoardDeck={setBoardDeck}
          players={players}
          setPlayers={setPlayers}
          classN={"player_1"}
          playerNum=""
        />  
      </PlayerContainer>
      <PlayerContainer className="player2">
        <CpuDeck
          boardDeck={boardDeck}
          setBoardDeck={setBoardDeck}
          players={players}
          setPlayers={setPlayers}
          classN={"player_2"}
          playerNum="1"
        />
      </PlayerContainer>    
      <PlayerContainer className="player3">
        <CpuDeck
          boardDeck={boardDeck}
          setBoardDeck={setBoardDeck}
          players={players}
          setPlayers={setPlayers}
          classN={"player_3"}
          playerNum="2"
        />
      </PlayerContainer>
      <PlayerContainer className="player4">
        <CpuDeck
          boardDeck={boardDeck}
          setBoardDeck={setBoardDeck}
          players={players}
          setPlayers={setPlayers}
          classN={"player_4"}
          playerNum="3"
        />
      </PlayerContainer>
      <PlayerContainer className="played">
        <Played players={players} boardDeck={boardDeck} />
      </PlayerContainer>
    </BoardContainer>
  );
};

export default Board;

const BoardContainer = styled.div`
  position: fixed;
  height: calc(100vh - 60px);
  height: 100vh;
  width: 100vw;
  display: grid;

  grid-template-columns: 15vh auto 15vh;
  grid-template-rows: 15vh auto 15vh;

  grid-template-areas:
    "player2 player2 player2"
    "player3 played player4"
    "player1 player1 player1";

  @media screen and (max-width: 480px) and (orientation: portrait) {
    background-color: yellow;
    height: calc(100vh - 65px);
    grid-template-rows: calc((100vw / 7) * 1.5 * 0.1) auto calc((100vw / 7) * 1.5 * 2);
    grid-template-columns: 0px auto 0px;
  }
`;

const PlayerContainer = styled.div`

  &.player1 {
    grid-area: player1;
    /* background-color: green; */
    justify-self: center;

    /* margin-bottom: 100px; */
  }

  &.player2 {
    grid-area: player2;
    /* background-color: red; */
    justify-self: center;

    /* align-self: center; */
  }

  &.player3 {
    grid-area: player3;
    align-self: center;
    /* background-color: red; */
    justify-self: center;

  
  }

  &.player4 {
    grid-area: player4;
    align-self: center;
    /* background-color: green; */
    justify-self: center;
  }

  &.played {
    grid-area: played;
    align-self: center;
    justify-self: center;

    @media screen and (max-device-width: 480px) and (orientation: portrait) {
      background-color: red;
    }
  }

  @media screen and (max-device-width: 480px) and (orientation: portrait) {
    &.player1 {
      background-color: brown;
    }
    &.player2 {
      background-color: aqua;
    }
    &.player3 {
      /* background-color: blueviolet; */
    }
    &.player4 {
      /* background-color: yellow; */
    }
  }
`;
