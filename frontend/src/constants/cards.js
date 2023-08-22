import getCardNumber from "../utils/getCardNumber";

const cards = () => {
  const cardValues = [
    "ace",
    "king",
    "queen",
    "jack",
    "10",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
  ];

  const cardSigns = ["spades", "clubs", "diamonds", "hearts"];

  const generatedCards = [];

  let index = 0;

  for (const value of cardValues) {
    for (const sign of cardSigns) {
      const cardNumber = getCardNumber(value);
      const isPlayable = cardNumber === 7;

      const card = {
        id: index,
        cardName: `${value}_of_${sign}.png`,
        cardNumber,
        cardVisibility: "hidden",
        userCardVisibility: "inline",
        isPlayable,
        player: "",
        upperCardId: index - 4,
        lowerCardId: index + 4,
      };

      generatedCards.push(card);
      index += 1;
    }
  }

  return generatedCards;
};

export default cards;