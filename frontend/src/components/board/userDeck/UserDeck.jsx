import React, { useEffect, useState } from "react";
import updateDeck from "../../../utils/updateDeck";
import styled from "styled-components";

const UserDeck = ({ boardDeck, setBoardDeck, players, setPlayers, classN }) => {

  console.log(boardDeck)

  const playCard = (playedCard, boardDeck, players, setBoardDeck, setPlayers) => {
    if (playedCard.isPlayable) {

      setBoardDeck(updateDeck(playedCard, boardDeck,"1"));

      // console.log("board",boardDeck);

      (async () => {
        try {
          await updatePlayersOnCardPlay(players, updateDeck(playedCard, boardDeck,"1"));
          console.log("All iterations have completed.");
        } catch (error) {
          console.error("An error occurred:", error);
        }
      })();

    } else {
      alert("Card is not playable");
    }
  };

  const updatePlayersOnCardPlay = async (players, updatedDeck) => {
    const updatedPlayers = [...players];

    await new Promise(resolve => setTimeout(resolve, 1500));
  
    for (let j = 1; j < updatedPlayers.length; ++j) {
      const playedCard = findHiddenPlayableCard(updatedPlayers[j].id, updatedDeck);
  
      if (playedCard) {
        updatedPlayers[j].numCards -= 1;
        updatedDeck = updateDeck(playedCard, updatedDeck,(j+1).toString());
      } else {
        updatedPlayers[j].numPasses += 1;
      }
  
      setPlayers(updatedPlayers);
      setBoardDeck(updatedDeck);
  
        await new Promise(resolve => setTimeout(resolve, 1500));
    }
  };
  
  const findHiddenPlayableCard = (playerId, deck) => {
    return deck.find(card => card.isPlayable && card.player === playerId && card.cardVisibility === "hidden");
  };

  const OnPassPlayedHandler = () => {
    players[0].numPasses += 1;
    updatePlayersOnCardPlay(players, boardDeck);
  };

  return (
    <PlayerContainer className={classN}>
      {boardDeck
      .filter((c) => c.player === "0")
      .map((card, index) => (
        <UserCard ismoving={card.isMoving.toString()} per={card.per} per2={card.per2} position={card.position} key={index} onClick={() => playCard(card, boardDeck, players, setBoardDeck, setPlayers)}>
          <UserCardImage visibility={card.userCardVisibility} src={require(`../../../assets/deck/${card.cardName}`)} alt="me"/>
        </UserCard>
      ))}
    <UserCard onClick={() => OnPassPlayedHandler()}>
      <UserCardImage src={require(`../../../assets/deck/pass.png`)} alt="pass" />
    </UserCard>
    </PlayerContainer>
  );
};

export default UserDeck;
//-225 -110 10 122
const UserCard = styled.div`
  position: ${(props) => (props.ismoving === 'true' ? "absolute" : '')};
  transform: ${(props) => (props.ismoving === 'true' ? `translate(0px, -275%)` : 'none')};
  /* transform: ${(props) => (props.ismoving === 'true' ? `translate(${props.per2}%, ${props.per}%)` : 'none')}; */
  left: ${(props) => (props.ismoving === 'true' ? "50%" : 'auto')};
  transition: transform 0.5s ease;
  cursor: pointer;
/* 
  left: ${(props) => (props.ismoving === 'true' ? "50%" : '-100%')};
  top: ${(props) => (props.ismoving === 'true' ? "50%" : '-100%')};
  transform: ${(props) => (props.ismoving === 'true' ? 'translate(-50%, -50%)' : 'none')};
  transition: left 0.5s ease, top 0.5s ease, transform 0.5s ease;
  transition-delay: 0.1s; /* Adding a slight delay for smoother transition */
  /* cursor: pointer;  */

  &:hover {
    transform: scale(1.05) translateY(-8px);
    transition: all 0.1s ease-in-out;
    cursor: pointer;
  }
`;

const UserCardImage = styled.img`
  --card-width: 10vh;
  width: var(--card-width);
  height: calc(var(--card-width) * 1.5);
  /* box-shadow: 2px 2px 2px 2px #00000077; */
  border-radius: 5px;
  transition: all 0.1s ease-in-out;
  visibility: ${({ visibility }) => visibility};
`;

const PlayerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(14, 15px);
  grid-gap: 0.5rem;

  &.player_1 {
    /* grid-gap: 0.5rem; */
    background-color: red;
  }
  &.player_2 {
      /* transform: rotate(180deg); */
  }
  &.player_3 {
    /* transform: rotate(90deg); */
  }
  &.player_4 {
    /* transform: rotate(90deg); */
  }
`;


