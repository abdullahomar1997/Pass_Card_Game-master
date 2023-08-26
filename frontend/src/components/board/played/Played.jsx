import React from "react";
import User from "../user/User";
// import UserDeck from "../userDeck/UserDeck";
// import "./Played.css";
// import styled from "styled-components";
import styled, { keyframes, css } from "styled-components";

const slideInFromLeft = keyframes`
  from {
    transform: translateX(-50vw);
  }
  to {
    transform: translateX(0);
  }
`;

const slideInFromRight = keyframes`
  from {
    transform: translateX(50vw);
  }
  to {
    transform: translateX(0);
  }
`;

const slideInFromTop = keyframes`
  from {
    transform: translateY(-50vh);
  }
  to {
    transform: translateY(0);
  }
`;

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
      <Card ismoving={card.isMoving.toString()} ismoving2={card.isMoving2}  key={index}>
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
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  box-sizing: border-box;
  grid-column-gap: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  overflow: scroll;
  background-color: brown;
  border-radius: 1rem;
  padding: 3rem 25vw;

  @media screen and (max-device-width: 480px) and (orientation: portrait) {
    padding: 0.5rem 0.5rem;
    grid-column-gap: 0.5rem;
  }
`;

const Card = styled.div`
position: relative;
  overflow: visible;
  /* position: relative; */
  /* position: absolute; */
  margin-top: -130%;
  /* transition: ${(props) => (props.ismoving === 'true' ? `` : 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out')}; */
  /* transition: ${(props) => (props.ismoving === 'true' ? `` : 'transform 0.5s ease')};
  transform: ${(props) => (props.ismoving === 'true' ? 'translateX(0)' : 'translateX(-200px)')};
  opacity: ${(props) => (props.ismoving === 'true' ? 1 : 1)}; */
  /* transition-delay: ${(props) => (props.ismoving === 'true' ? '0.5s, 0.5s' : '0.5')}; */
  /* transform: ${(props) => (props.ismoving === 'true' ? `translateX(0)` : 'translateX(-50vw)')}; */
  /* transform: ${(props) => (props.ismoving2 === '2' ? `translateX(0)` : 'translateX(-50vw)')}; */
  /* transition: transform 0.9s ease; */

  /* animation: ${({ ismoving,ismoving2 }) => ismoving === "true" && ismoving2 === "2" ? css` ${slideInFromLeft} 1s forwards`: "none"};
  animation: ${({ ismoving,ismoving2 }) => ismoving === "true" && ismoving2 === "4" ? css` ${slideInFromRight} 1s forwards`: "none"};
  animation: ${({ ismoving,ismoving2 }) => ismoving === "true" && ismoving2 === "3" ? css` ${slideInFromTop} 1s forwards`: "none"}; */

  animation: ${({ ismoving, ismoving2 }) =>
    ismoving === "true" &&
    ismoving2 === "2"
      ? css`
          ${slideInFromLeft} 2s forwards
        `
      : ismoving === "true" &&
        ismoving2 === "4"
      ? css`
          ${slideInFromRight} 2s forwards
        `
      : ismoving === "true" &&
        ismoving2 === "3"
      ? css`
          ${slideInFromTop} 2s forwards
        `
      : "none"};

  &:nth-child(-n + 4) {
    margin-top: 0%;
  }
`;

const CardImage = styled.img`
    /* position: absolute; */

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
