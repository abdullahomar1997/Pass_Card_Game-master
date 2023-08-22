import shuffleArray from "./shuffleArray";

export default function assignCards(players, cards) {
    const shuffledCardIndexes = shuffleArray(Array.from({ length: cards.length }, (_, index) => index));
    
    for (let i = 0; i < shuffledCardIndexes.length; i++) {
        const playerIndex = i % players.length;
        cards[shuffledCardIndexes[i]].player = players[playerIndex].id;
    }
    return cards;
}