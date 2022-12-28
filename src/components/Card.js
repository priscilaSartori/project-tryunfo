import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';
import Rectangle from '../Rectangle.png';
import RectangleBranco from '../RectangleBranco.png';

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
      <div className={ styles.visualizacao }>
        <legend className={ styles.preVisualization }>Pré-visualização</legend>
        <div className={ styles.carta }>
          <div className={ styles.fundo }>
            <h2 data-testid="name-card" className={ styles.cardName }>{cardName}</h2>
            <img src={ Rectangle } alt="Rectangle" className={ styles.imagem } />
            <img
              src={ cardImage }
              alt={ cardName }
              data-testid="image-card"
              className={ styles.imagem2 }
            />
            <h2 data-testid="description-card" className={ styles.cardDescription }>
              {cardDescription}
            </h2>
            <img
              src={ RectangleBranco }
              alt="RectangleBranco"
              className={ styles.RectangleBranco }
            />
            <div className={ styles.attr }>
              <div className={ styles.attrName }>
                <h2 className={ styles.nameAttr1 }>Attr01............................</h2>
                <h2 className={ styles.cardAttr1 } data-testid="attr1-card">{cardAttr1}</h2>
              </div>
              <div className={ styles.attrName }>
                <h2 className={ styles.nameAttr2 }>Attr02............................</h2>
                <h2 className={ styles.cardAttr2 } data-testid="attr2-card">{cardAttr2}</h2>
              </div>
              <div className={ styles.attrName }>
                <h2 className={ styles.nameAttr3 }>Attr03............................</h2>
                <h2 className={ styles.cardAttr3 } data-testid="attr3-card">{cardAttr3}</h2>
              </div>
            </div>
          </div>
        </div>
        <div className={ styles.rareTrunfo }>
          <h2 data-testid="rare-card" className={ styles.rareCard }>{cardRare}</h2>
          {cardTrunfo
            ? (
              <h2
                data-testid="trunfo-card"
                id="trunfo"
                className={ styles.trunfoCard }
              >
                Super Trunfo
              </h2>
            ) : <h2> </h2>}
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
