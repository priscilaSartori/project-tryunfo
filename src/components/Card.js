import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div>
        <h2 data-testid="name-card">{ cardName }</h2>
        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
        />
        <h2 data-testid="description-card">{ cardDescription }</h2>
        <h2 data-testid="attr1-card">{ cardAttr1 }</h2>
        <h2 data-testid="attr2-card">{ cardAttr2 }</h2>
        <h2 data-testid="attr3-card">{ cardAttr3 }</h2>
        <h2 data-testid="rare-card">{ cardRare }</h2>
        { cardTrunfo
          ? <h2 data-testid="trunfo-card" id="trunfo">Super Trunfo</h2> : <h2> </h2> }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
