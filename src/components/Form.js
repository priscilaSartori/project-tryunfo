import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Form.css';

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
      <form>
        <legend className="legenda">Adicione Nova Carta</legend>
        <div className="divInput">
          <label htmlFor="name">
            Nome
            <input
              data-testid="name-input"
              id="name"
              type="text"
              name="cardName"
              value={ cardName }
              onChange={ onInputChange }
              className="inputNome"
            />
          </label>
        </div>
        <div className="divInput">
          <label htmlFor="description">
            Description
            <textarea
              data-testid="description-input"
              id="description"
              name="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
              className="textArea"
            />
          </label>
        </div>
        <div className="divInput">
          <label htmlFor="attr1">
            Attr1
            <input
              data-testid="attr1-input"
              id="attr1"
              type="number"
              name="cardAttr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
              className="attr"
            />
          </label>
        </div>
        <div className="divInput">
          <label htmlFor="attr2">
            Attr2
            <input
              data-testid="attr2-input"
              id="attr2"
              type="number"
              name="cardAttr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
              className="attr"
            />
          </label>
        </div>
        <div className="divInput">
          <label htmlFor="attr3">
            Attr3
            <input
              data-testid="attr3-input"
              id="attr3"
              type="number"
              name="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
              className="attr"
            />
          </label>
        </div>
        <p className="pontos">Pontos Restantes = 000 </p>
        <div className="divInput">
          <label htmlFor="image">
            Imagem
            <input
              data-testid="image-input"
              id="image"
              type="text"
              name="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
              className="img"
            />
          </label>
        </div>
        <p className="raridade">Raridade</p>
        <select
          data-testid="rare-input"
          id="rare"
          type="select"
          name="cardRare"
          value={ cardRare }
          onChange={ onInputChange }
        >
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito raro</option>
        </select>
        <p className="pontos">Total de pontos = 000 </p>
        <div className="save">
          {
            hasTrunfo
              ? <h2 className="hasTrunfo">Você já tem um Super Trunfo em seu baralho</h2>
              : (
                <div>
                  <label htmlFor="trunfo" className="trunfo">
                    Trunfo
                    <input
                      data-testid="trunfo-input"
                      id="trunfo"
                      type="checkbox"
                      name="cardTrunfo"
                      checked={ cardTrunfo }
                      onChange={ onInputChange }
                    />
                  </label>
                </div>
              )
          }
          <button
            data-testid="save-button"
            type="button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            className="buttonSave"
          >
            Salvar
          </button>
        </div>
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
