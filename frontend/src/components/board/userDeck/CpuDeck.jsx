import React from "react";
import styled from "styled-components";

const CpuDeck = ({ boardDeck, setBoardDeck, players, setPlayers, classN,playerNum }) => {
  return (
    <PlayerContainer className={classN}>
      {boardDeck
      .filter((c) => c.player === playerNum)
      .map((card, index) => (
        <CpuCard key={index}>
          <CpuCardImage src={require('../../../assets/deck/pass.png')} alt="me" />
          {/* <CpuCardImage visibility={card.userCardVisibility} src={require(`../../../assets/deck/${card.cardName}`)} alt="me"/> */}
        </CpuCard>
      ))}
    
      <CpuCard>
        <CpuCardImage src={require('../../../assets/deck/pass.png')} alt="pass" />
      </CpuCard>
    </PlayerContainer>
  );
};

export default CpuDeck;

const CpuCard = styled.div`
`;

const CpuCardImage = styled.img`
  --card-width: 7vh;
  width: var(--card-width);
  height: calc(var(--card-width) * 1.5);
  /* box-shadow: 2px 2px 2px 2px #00000077; */
  border-radius: 5px;
  transition: all 0.1s ease-in-out;
`;

const PlayerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(14, 15px);
  grid-gap: 2px;
  /* margin-bottom:10px; */
  align-items: center;

  &.player_1 {
    /* grid-gap: 0.5rem; */
  }
  &.player_2 {
      /* transform: rotate(180deg); */
      background-color: yellow;
  }
  &.player_3 {
    transform: rotate(90deg);
  }
  &.player_4 {
    transform: rotate(90deg);
  }
`;