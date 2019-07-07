// import { combineReducers } from 'redux';
import { C } from '../actions';
import cards from '../data/index.json';

function randomArr(arr) {
  return arr.sort(() => Math.random() - 0.5);
}
// set random cards for initial state
// this allows the cards to appear on screen without using component life cycle method
const shuffledCards = randomArr(cards.cards);
const defaultState = {
  cards: [...cards.cards],
  selected: [],
  selectedCards: [...shuffledCards.filter((card, index) => index === 2
    || index === 3 || index === 5),
  ],
};
// root reducer
const rootReducer = (state = defaultState, action) => {
  const randomCard = Math.floor(Math.random() * state.cards.length);
  const shuffled = randomArr(state.cards);
  switch (action.type) {
    case C.GETTHREECARDS:
      // shuffle array grab three items
      return {
        ...state,
        selectedCards: [...shuffled.filter((card, index) => index === 2
          || index === 3 || index === 5),
        ],
      };
    case C.SHUFFLEDECK:
      return [
        ...state,
        action.payload,
      ];
    case C.SELECTCARD:
      return {
        ...state,
        selected: [...state.cards.filter((card, index) => index === randomCard)],
      };
    case C.FLIPCARD:
      return {
        ...state,
        selectedCards: [...state.selectedCards.map((card) => {
          if (card.card === action.payload) {
            // copy merged object into empty object
            return Object.assign({},
              card,
              {
                flipped: !card.flipped,
              });
          }
          return card;
        })],
      };
    default:
      return state;
  }
};

export default rootReducer;
// export default combineReducers({
//   cardReducers,
// });
