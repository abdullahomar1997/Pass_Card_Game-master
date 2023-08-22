import React from "react";
import updateDeck from "../../../utils/updateDeck";
import "./UserDeck2.css";

let updatedDeck;

const UserDeck2 = ({ boardDeck, setBoardDeck, players, setPlayers,classN,showCards }) => {
  const OnCardPlayedHandler = (card) => {
    console.log(players);
    if (card.isPlayable) {
      updatedDeck = updateDeck(card, boardDeck);

      players[0].numCards -= 1;
      setPlayers(players);

      CpuPlayAutomatically();
      setBoardDeck(updatedDeck);
    } else {
      alert("Card is not Playable");
    }
  };

  const OnPassPlayedHandler = () => {
    players[0].numPasses += 1;
    setPlayers(players);
    CpuPlayAutomatically();
    setBoardDeck(updatedDeck);
  };

  const CpuPlayAutomatically = () => {
    for (let j = 1; j < players.length; ++j) {
      let found = false;

      for (let i = 0; i < updatedDeck.length; ++i) {
        const card = updatedDeck[i];
        if (
          card.isPlayable &&
          card.player === players[j].id &&
          card.cardVisibility === "hidden"
        ) {
          found = true;
          players[j].numCards -= 1;
          setPlayers(players);

          updatedDeck = updateDeck(card, updatedDeck);

          break;
        }
      }
      if (!found) {
        players[j].numPasses += 1;
        setPlayers(players);
      }
    }
  };

  return (
    <div className={classN}>
      {boardDeck
        .filter((c) => c.player === "0")
        .map((card) => (
          <div
            className="userCard leftlap"
            onClick={() => OnCardPlayedHandler(card)}
          >
            {
              showCards ?  ( 
              <img
              style={{ visibility: card.userCardVisibility }}
              src={require(`../../../assets/deck/${card.cardName}`)}
              alt="me"
            />
            ) :
            (<img
              src={require(`../../../assets/deck/pass.png`)}
              alt="me"
            />
            ) 
            }
          </div>
        ))}

      <div
        className="userCard bottom_right"
        onClick={() => OnPassPlayedHandler()}
      >
        <img src={require(`../../../assets/deck/pass.png`)} alt="pass" />
      </div>
    </div>
  );
};

export default UserDeck2;
