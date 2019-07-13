import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers';

/* eslint-disable no-underscore-dangle */
const middleware = applyMiddleware(thunk, logger);
const store = createStore(
  rootReducer,
  middleware,
  /* preloadedState, */
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
