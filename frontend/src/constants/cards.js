import getCardNumber from "../utils/getCardNumber";

const cards = () => {

  const myMap2 = new Map();
  
  myMap2.set("spades", -225);
  myMap2.set("hearts", -110);
  myMap2.set("clubs", 10);
  myMap2.set("diamonds", 122);

  const myMap = new Map();
  
  myMap.set("ace", -365);
  myMap.set("king", -350);
  myMap.set("queen", -335);
  myMap.set("jack", -320);
  myMap.set("10", -305);
  myMap.set("9", -290);
  myMap.set("8", -275);
  myMap.set("7", -260);
  myMap.set("6", -245);
  myMap.set("5", -230);
  myMap.set("4", -215);
  myMap.set("3", -200);
  myMap.set("2", -185);


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
        // cardVisibility: "visible",
        userCardVisibility: "inline",
        isPlayable,
        player: "",
        upperCardId: index - 4,
        lowerCardId: index + 4,
        position : { x: 0, y: 0 },
        isMoving: false,
        isMoving2:"1",
        per:myMap.get(value),
        per2:myMap2.get(sign)
      };

      generatedCards.push(card);
      index += 1;
    }
  }

  return generatedCards;
};

export default cards;