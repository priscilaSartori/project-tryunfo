import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Card.css';

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
      <div className="card">
        <legend className="legenda">Pré-visualização</legend>
        <div className="bordaBranca">
          <div className="fundoVerde">
            <div className="divNameCard">
              <h2 data-testid="name-card" className="nameCard">{cardName}</h2>
            </div>
            <img
              src={ cardImage }
              alt={ cardName }
              data-testid="image-card"
              className="imageCard"
            />
            <h2 data-testid="description-card" className="descriptionCard">
              {cardDescription}
            </h2>
          </div>
          <div className="quadroAttr">
            <div className="divAttr">
              <p className="pAttr">Attr01....................................</p>
              <p data-testid="attr1-card" className="h2Attr">{cardAttr1}</p>
            </div>
            <div className="divAttr">
              <p className="pAttr">Attr02....................................</p>
              <p data-testid="attr2-card" className="h2Attr">{cardAttr2}</p>
            </div>
            <div className="divAttr">
              <p className="pAttr">Attr03....................................</p>
              <p data-testid="attr3-card" className="h2Attr">{cardAttr3}</p>
            </div>
            <div className="divAttr">
              <p className="pRaridade">Raridade..................................</p>
              <p data-testid="rare-card" className="h2Attr">{cardRare}</p>
            </div>
            {cardTrunfo
              ? <h2 data-testid="trunfo-card" id="trunfo" className="super">Super Trunfo</h2> : <h2> </h2>}
          </div>
        </div>
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
