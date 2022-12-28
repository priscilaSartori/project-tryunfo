import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';
import link from '../link.png';

class Form extends React.Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onSaveButtonClick,
      onInputChange,
    } = this.props;
    return (
      <form className={ styles.form }>
        <legend className={ styles.novaCarta }>Adicione Nova Carta</legend>
        <label htmlFor="name" className={ styles.name }>
          Nome
          <input
            className={ styles.imputName }
            data-testid="name-input"
            id="name"
            type="text"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="description" className={ styles.description }>
          Description
          <textarea
            className={ styles.imputDescription }
            data-testid="description-input"
            id="description"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr1" className={ styles.attr1 }>
          Attr1
          <input
            className={ styles.imputAttr1 }
            data-testid="attr1-input"
            id="attr1"
            type="number"
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr2" className={ styles.attr2 }>
          Attr2
          <input
            className={ styles.imputAttr2 }
            data-testid="attr2-input"
            id="attr2"
            type="number"
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr3" className={ styles.attr3 }>
          Attr3
          <input
            className={ styles.imputAttr3 }
            data-testid="attr3-input"
            id="attr3"
            type="number"
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <p className={ styles.pontos }>Pontos restantes = 000</p>
        <label htmlFor="image" className={ styles.imagem }>
          Imagem
          <input
            className={ styles.imputImagem }
            data-testid="image-input"
            id="image"
            type="text"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
          />
          <img src={ link } alt="link" className={ styles.link } />
        </label>
        <label htmlFor="image" className={ styles.rare }>
          Raridade
          <select
            className={ styles.rareInput }
            data-testid="rare-input"
            id="rare"
            type="select"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <p className={ styles.total }>Total de pontos = 000</p>
        {
          hasTrunfo
            ? (
              <h2 className={ styles.hasTrunfo }>
                Você já tem um Super Trunfo em seu baralho
              </h2>
            )
            : (

              <label htmlFor="trunfo" className={ styles.trunfo }>
                <input
                  data-testid="trunfo-input"
                  id="trunfo"
                  type="checkbox"
                  name="cardTrunfo"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                />
                Super Trybe Trunfo
              </label>
            )
        }
        <button
          data-testid="save-button"
          type="button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
