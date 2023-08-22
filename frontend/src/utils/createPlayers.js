export default function createPlayers(numberOfPlayers) {
    const players = [];
    
    for (let i = 0; i < numberOfPlayers; ++i) {
        const player = {
            id: i.toString(),
            playerName: `Player ${i + 1}`,
            numCards: 0,
            numPasses: 0,
        };
        players.push(player);
    }
    return players;
}  