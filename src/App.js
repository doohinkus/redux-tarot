/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { C } from './actions';
import './App.css';
import Card from './components/Card';

const mapStateToProps = state => ({
  state,
});

function App(props) {
  const { state } = props;
  const { selected } = state;
  return (
    <div className="App">
      <section className="App-header">
        <h1>Marseille Tarot</h1>
        <p>{selected && selected.map(card => card.title)}</p>
        <button
          onClick={() => props.dispatch({ type: C.GETTHREECARDS })}
          type="button"
          className="no-border"
        >
          <img
            src="./images/tarot-button.gif"
            alt="sun button roll"
            className="pointer"
          />
        </button>
        <span className="small">shuffle</span>
        <div className="grid">
          {state.selectedCards && state.selectedCards.map(card => (
            <React.Fragment key={card.card}>
              <Card
                title={card.title}
                faceValue={card.img}
                isFlipped={card.flipped}
                tagline={card.tagline}
                meaning={card.article}
                // this can be called in the component via redux!!!
                flipCard={() => props.dispatch({ type: C.FLIPCARD, payload: card.card })}
                // just pass the piece of state that the component needs
              />
            </React.Fragment>
          ))}
        </div>
      </section>
    </div>
  );
}
App.propTypes = {
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};
export default connect(mapStateToProps)(App);
