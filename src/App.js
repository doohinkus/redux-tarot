/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { flipCard, getThreeCards, dadJoke } from './actions';
import './App.css';
import Card from './components/Card';
// pull the state you want to use
const mapStateToProps = state => ({
  selectedCards: state.selectedCards,
});
// pull the actions you want to use
const mapDispatchToProps = {
  flipCard,
  getThreeCards,
  dadJoke,
};
function App(props) {
  // destructure props
  const { selectedCards } = props;
  return (
    <div className="App">
      <section className="App-header">
        <h1>Marseille Tarot</h1>
        <button type="button" onClick={() => props.dadJoke()}>joke</button>
        <button
        // no need to destructure actions
          onClick={() => props.getThreeCards()}
          type="button"
          className="no-border"
          data-cy="shuffle-button"
        >
          <img
            src="./images/tarot-button.gif"
            alt="sun button roll"
            className="pointer"
          />
        </button>
        <span className="small">shuffle</span>
        <div className="grid">
          {selectedCards && selectedCards.map(card => (
            <React.Fragment key={card.card}>
              <Card
                title={card.title}
                faceValue={card.img}
                isFlipped={card.flipped}
                tagline={card.tagline}
                meaning={card.article}
                flipCard={() => props.flipCard(card.card)}
              />
            </React.Fragment>
          ))}
        </div>
      </section>
    </div>
  );
}
App.propTypes = {
  selectedCards: PropTypes.array.isRequired,
  flipCard: PropTypes.func.isRequired,
  dadJoke: PropTypes.func.isRequired,
  getThreeCards: PropTypes.func.isRequired,
};
// glue redux to this component
export default connect(mapStateToProps, mapDispatchToProps)(App);
