import React, { useState } from 'react';
import './Card.css';

const Card = ({ rank = 'A', suit = 'hearts', isMoving = false,  onClick }) => {
    const cardStyle = {
      // transform: isMoving ? `translate(${position.x}px, ${position.y}px)` : 'none',
      transform: isMoving ? `translate(200px, 100px)` : 'none',
      transition: 'transform 0.5s ease',
    };

    
  
    return <div className={`card ${suit}`} style={cardStyle} onClick={onClick}>{rank}</div>;
  };
  

const New = () => {
  const [playedCard, setPlayedCard] = useState(null);

  const handleCardClick = (card) => {
    setPlayedCard({ ...card, isMoving: true});
  };

   // After a short delay, reset the moving flag to stop the animation
   setTimeout(() => {
    setPlayedCard(null);
  }, 500); // Match the duration of the CSS transition

  return (
    <div className="game-board">
      {/* Render other components */}
      <Card
        rank={playedCard?.rank}
        suit={playedCard?.suit}
        isMoving={playedCard?.isMoving}
        // position={playedCard?.position}
        onClick={() => handleCardClick(playedCard)}
      />
      
      {/* Render other components */}
    </div>
  );
};

export default New;
