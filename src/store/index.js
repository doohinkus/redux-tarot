import { createStore } from 'redux';
// import thunk from 'redux-thunk';
import rootReducer from '../reducers';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */
export default store;
// export default function configureStore(initialState = sample) {
//   return createStore(
//     rootReducer,
//     initialState,
//     applyMiddleware(thunk),
//   );
// }
