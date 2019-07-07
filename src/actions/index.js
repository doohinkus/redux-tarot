// action names
const C = {
  SHUFFLEDECK: 'SHUFFLEDECK',
  SELECTCARD: 'SELECTCARD',
  FLIPCARD: 'FLIPCARD',
  GETTHREECARDS: 'GETTHREECARDS',
};
// action creators
function shuffleDeck() {
  return {
    type: C.SHUFFLEDECK,
  };
}
function getThreeCards() {
  return {
    type: C.GETTHREECARDS,
  };
}
function selectCard(cardId) {
  return {
    type: C.SELECTCARD,
    payload: cardId,
  };
}

function flipCard(cardId) {
  return {
    type: C.FLIPCARD,
    payload: cardId,
  };
}

export {
  shuffleDeck,
  selectCard,
  flipCard,
  getThreeCards,
  C,
};
