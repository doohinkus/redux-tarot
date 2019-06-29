// action names
const C = {
  SHUFFLEDECK: 'SHUFFLEDECK',
  SELECTCARD: 'SELECTCARD',
  FLIPCARD: 'FLIPCARD',
  GETTHREECARDS: 'GETTHREECARDS',
};
// action creators
const shuffleDeck = () => (dispatch) => {
  dispatch({
    type: C.SHUFFLEDECK,
  });
};
const selectCard = cardId => dispatch => (
  dispatch({
    type: C.SELECTCARD,
    payload: cardId,
  })
);
const flipCard = cardId => dispatch => (
  dispatch({
    type: C.FLIPCARD,
    payload: cardId,
  })
);


export {
  shuffleDeck,
  selectCard,
  flipCard,
  C,
};
