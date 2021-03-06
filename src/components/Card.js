/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import PropTypes from 'prop-types';


function Card({
  isFlipped,
  title,
  faceValue,
  tagline,
  flipCard,
}) {
  const back = './images/card-back.jpg';
  return (
    <section data-cy="card">
      <React.Fragment>
        <p className={isFlipped ? 'fade-in' : 'fade-out'}>{title}</p>
        <button
          type="button"
          className="no-border rounded fade-in pointer slide-in-elliptic-top-fwd"
          onClick={flipCard}
        >
          <img
            alt={title}
            className={`rounded ${isFlipped ? 'is-flipped' : 'is-facedown'}`}
            src={isFlipped ? faceValue : back}
          />
        </button>
        <p className={isFlipped ? 'fade-in' : 'fade-out'}>{tagline}</p>

      </React.Fragment>
    </section>
  );
}
Card.defaultProps = {
  isFlipped: false,
};
Card.propTypes = {
  isFlipped: PropTypes.bool,
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  faceValue: PropTypes.string.isRequired,
  flipCard: PropTypes.func.isRequired,
};
export default Card;
