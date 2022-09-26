import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <legend>Adicione Nova Carta</legend>
        <div>
          <label htmlFor="name">
            Nome
            <input
              data-testid="name-input"
              id="name"
              type="text"
              name="name"
            />
          </label>
        </div>
        <div data-testid="description-input">
          <label htmlFor="description">
            Nome
            <input
              id="description"
              type="textarea"
              name="description"
            // value={name}
            // onChange={changeHandler}
            />
          </label>
        </div>
        <div data-testid="attr1-input">
          <label htmlFor="attr1">
            Attr1
            <input
              id="attr1"
              type="number"
              name="attr1"
            // value={name}
            // onChange={changeHandler}
            />
          </label>
        </div>
        <div data-testid="attr2-input">
          <label htmlFor="attr2">
            Attr2
            <input
              id="attr2"
              type="number"
              name="attr2"
            // value={name}
            // onChange={changeHandler}
            />
          </label>
        </div>
        <div data-testid="attr3-input">
          <label htmlFor="attr3">
            Attr3
            <input
              id="attr3"
              type="number"
              name="attr3"
            // value={name}
            // onChange={changeHandler}
            />
          </label>
        </div>
        <div data-testid="image-input">
          <label htmlFor="image">
            Imagem
            <input
              id="image"
              type="text"
              name="image"
            // value={name}
            // onChange={changeHandler}
            />
          </label>
        </div>
        <select data-testid="rare-input">
          <label htmlFor="rare">
            Raridade
            <input
              id="rare"
              type="select"
              name="rare"
            />
          </label>
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito raro</option>
        </select>
        <div data-testid="trunfo-input">
          <label htmlFor="trunfo">
            Trunfo
            <input
              id="trunfo"
              type="checkbox"
              name="trunfo"
            // value={name}
            // onChange={changeHandler}
            />
          </label>
        </div>
        <button data-testid="save-button" type="button">Salvar</button>
      </form>
    );
  }
}
export default Form;
