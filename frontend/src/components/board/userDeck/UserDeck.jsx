import React, { useEffect, useState } from "react";
import updateDeck from "../../../utils/updateDeck";
import styled from "styled-components";

const UserDeck = ({ boardDeck, setBoardDeck, players, setPlayers, classN }) => {

  const playCard = (playedCard, boardDeck, players, setBoardDeck, setPlayers) => {
    if (playedCard.isPlayable) {
      setBoardDeck(updateDeck(playedCard, boardDeck));

      // updatePlayersOnCardPlay(players, updateDeck(playedCard, boardDeck));
      (async () => {
        try {
          await updatePlayersOnCardPlay2(players,  updateDeck(playedCard, boardDeck));
          console.log("All iterations have completed.");
        } catch (error) {
          console.error("An error occurred:", error);
        }
      })();

    } else {
      alert("Card is not playable");
    }
  };

  const updatePlayersOnCardPlay2 = async (players, updatedDeck) => {
    const updatedPlayers = [...players];

    await new Promise(resolve => setTimeout(resolve, 3000));
  
    for (let j = 1; j < updatedPlayers.length; ++j) {
      const playedCard = findHiddenPlayableCard(updatedPlayers[j].id, updatedDeck);
  
      if (playedCard) {
        updatedPlayers[j].numCards -= 1;
        updatedDeck = updateDeck(playedCard, updatedDeck);
      } else {
        updatedPlayers[j].numPasses += 1;
      }
  
      setPlayers(updatedPlayers);
      setBoardDeck(updatedDeck);
  
      // Introduce a delay of 3 seconds
      await new Promise(resolve => setTimeout(resolve, 3000));
    }
  };
  

  const updatePlayersOnCardPlay = (players, updatedDeck) => {
    const updatedPlayers = [...players];
  
    for (let j = 1; j < updatedPlayers.length; ++j) {
      const playedCard = findHiddenPlayableCard(updatedPlayers[j].id, updatedDeck);
  
      if (playedCard) {
        updatedPlayers[j].numCards -= 1;
        updatedDeck = updateDeck(playedCard, updatedDeck);
      } else {
        updatedPlayers[j].numPasses += 1;
      }
      setPlayers(updatedPlayers);
      setBoardDeck(updatedDeck);
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
        <UserCard key={index} onClick={() => playCard(card, boardDeck, players, setBoardDeck, setPlayers)}>
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

const UserCard = styled.div`
  cursor: pointer;

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


