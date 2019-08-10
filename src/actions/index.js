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

function dadJoke() {
  return (dispatch) => {
    dispatch({ type: 'START_DAD_JOKE' });
    return fetch('https://icanhazdadjoke.com/slack')
      .then(res => res.json())
      .then(res => dispatch({
        type: 'DAD_JOKE',
        payload: res.attachments[0].text,
      }));
  };
}
// reducer outputs new state
// should the new state come from here? If asynch, yes.
/* EXAMPLE OF HOW TO CALL ASYCH ACTIONS */
// Example of asych
// export function selectSubreddit(subreddit) {
//   return {
//     type: SELECT_SUBREDDIT,
//     subreddit
//   }
// }

// export function invalidateSubreddit(subreddit) {
//   return {
//     type: INVALIDATE_SUBREDDIT,
//     subreddit
//   }
// }

// function requestPosts(subreddit) {
//   return {
//     type: REQUEST_POSTS,
//     subreddit
//   }
// }

// function receivePosts(subreddit, json) {
//   return {
//     type: RECEIVE_POSTS,
//     subreddit,
//     posts: json.data.children.map(child => child.data),
//     receivedAt: Date.now()
//   }
// }

// function fetchPosts(subreddit) {
//   return dispatch => {
//     dispatch(requestPosts(subreddit))
//     return fetch(`https://www.reddit.com/r/${subreddit}.json`)
//       .then(response => response.json())
//       .then(json => dispatch(receivePosts(subreddit, json)))
//   }
// }

// function shouldFetchPosts(state, subreddit) {
//   const posts = state.postsBySubreddit[subreddit]
//   if (!posts) {
//     return true
//   } else if (posts.isFetching) {
//     return false
//   } else {
//     return posts.didInvalidate
//   }
// }

// export function fetchPostsIfNeeded(subreddit) {
//   return (dispatch, getState) => {
//     if (shouldFetchPosts(getState(), subreddit)) {
//       return dispatch(fetchPosts(subreddit))
//     }
//   }
// }

export {
  shuffleDeck,
  selectCard,
  flipCard,
  getThreeCards,
  dadJoke,
  C,
};
