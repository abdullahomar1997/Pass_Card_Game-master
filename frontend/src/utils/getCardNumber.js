const getCardNumber = (cardSign) => {

    const map = new Map();

    map.set("2", 2);
    map.set("3", 3);
    map.set("4", 4);
    map.set("5", 5);
    map.set("6", 6);
    map.set("7", 7);
    map.set("8", 8);
    map.set("9", 9);
    map.set("10", 10);
    map.set("jack", 11);
    map.set("queen", 12);
    map.set("king", 13);
    map.set("ace", 14);


    return map.get(cardSign);

}

export default getCardNumber;