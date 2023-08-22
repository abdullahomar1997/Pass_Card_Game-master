import React from "react";
import User from "../user/User";
// import UserDeck from "../userDeck/UserDeck";
import "./Played.css";
import styled from "styled-components";

const Played = ({ boardDeck, players }) => {
  const countNumberOfCards = () => {
    let num = 0;

    // for (let i = 0; i < boardDeck.length; ++i) {
    //   if (boardDeck[i].player === id) {
    //     num += 1;
    //   }
    // }
    return num;
  };

  const countNumberOfPasses = () => {};

  return (
    // <div className="mainBlock">
    //   {boardDeck.map((card) => (
    //     <div className="card overlap">
    //       <img
    //         style={{ visibility: card.cardVisibility }}
    //         src={require(`../../../assets/deck/${card.cardName}`)}
    //         alt={card.cardName}
    //       />
    //     </div>
    //   ))}
    // </div>
    <MainBlock>
    {boardDeck.map((card, index) => (
      <Card key={index}>
        <CardImage
          visibility={card.cardVisibility}
          src={require(`../../../assets/deck/${card.cardName}`)}
          alt={card.cardName}
        />
      </Card>
    ))}
  </MainBlock>
  );
};

export default Played;

const MainBlock = styled.div`
 display: grid;
  grid-template-columns: repeat(4, 1fr);
  box-sizing: border-box;
  grid-column-gap: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  overflow: scroll;
  background-color: brown;
  border-radius: 1rem;
  padding: 1rem 3vw;

  @media screen and (max-device-width: 480px) and (orientation: portrait) {
    padding: 0.5rem 0.5rem;
    grid-column-gap: 0.5rem;
  }
`;

const Card = styled.div`
 position: relative;
  margin-top: -130%;

  &:nth-child(-n + 4) {
    margin-top: 0%;
  }
`;

const CardImage = styled.img`
--card-width: 10vh;
  width: var(--card-width);
  height: calc(var(--card-width) * 1.5);
  box-shadow: 2px 2px 2px 2px #00000077;
  border-radius: 5px;
  visibility: ${props => props.visibility};

  @media screen and (max-device-width: 480px) and (orientation: portrait) {
    --card-width: calc(100vw / 7);
    /* padding: 0.1rem; */
  }`;
