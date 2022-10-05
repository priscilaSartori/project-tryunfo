import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    listCard: [],
    listFilter: [],
    listTrunfo: [],
    nameFilter: '',
    rareFilter: '',
    trunfoFilter: false,
  };

  deleteCard = ({ target }) => {
    const { id } = target;
    const { listCard } = this.state;
    const cardDeleted = listCard.filter((card1) => card1.cardName !== id);
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      listCard: cardDeleted,
      hasTrunfo: false,
      listFilter: cardDeleted,
    });
  };

  buttonSave = () => {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare,
    } = this.state;
    const pontosMax = 90;
    const pontosMin = 0;
    const pontosTotal = 210;
    const camposText = !cardName || !cardDescription || !cardImage || !cardRare;
    const camposAtrib1 = cardAttr1 < pontosMin || cardAttr1 > pontosMax;
    const camposAtrib2 = cardAttr2 < pontosMin || cardAttr2 > pontosMax;
    const camposAtrib3 = cardAttr3 < pontosMin || cardAttr3 > pontosMax;
    const Atributos = [Number(cardAttr1), Number(cardAttr2), Number(cardAttr3)];
    const totalAtrib = Atributos.reduce((total, Atributo) => total + Atributo, 0);
    const somaAtrib = totalAtrib > pontosTotal;
    if (camposText || camposAtrib1 || camposAtrib2 || camposAtrib3 || somaAtrib) {
      this.setState({ isSaveButtonDisabled: true });
    } this.setState({ isSaveButtonDisabled: false });
  };

  cardTrunfo = () => {
    const { cardTrunfo } = this.state;
    if (cardTrunfo) {
      this.setState({ hasTrunfo: true });
    } this.setState({ hasTrunfo: false });
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => {
      this.buttonSave(); this.cardTrunfo(); this.cardFilterName();
      this.cardFilterRare(); this.cardFilterTrunfo();
    });
  };

  onSaveButtonClick = () => {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, listCard, cardTrunfo,
    } = this.state;
    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    this.setState({
      listCard: [...listCard, newCard],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      listFilter: [...listCard, newCard],
    });
  };

  renderCard = () => {
    const { listFilter, listCard, listTrunfo, trunfoFilter } = this.state;
    console.log('trunfo', listTrunfo);
    console.log('filter', listFilter);
    console.log('card', listCard);
    if (trunfoFilter) {
      return listTrunfo;
    } if (!trunfoFilter || listFilter) {
      return listFilter;
    } if (!trunfoFilter || !listFilter) {
      return listCard;
    }
  };

  cardFilterName = () => {
    const { nameFilter, listFilter } = this.state;
    const cardFilterN = listFilter.filter((card) => card.cardName.includes(nameFilter));
    this.setState({ listFilter: cardFilterN });
  };

  cardFilterRare = () => {
    const { listFilter, rareFilter } = this.state;
    if (rareFilter !== 'todas') {
      const cardFilterR = listFilter.filter((card) => card.cardRare === rareFilter);
      this.setState({ listFilter: cardFilterR });
    } if (rareFilter === 'todas') {
      this.setState({ listFilter });
    }
  };

  cardFilterTrunfo = () => {
    const { trunfoFilter, listFilter } = this.state;
    if (trunfoFilter) {
      const cardFilterT = listFilter.filter((card) => card.cardTrunfo);
      this.setState({ listTrunfo: cardFilterT });
    }
  };

  render() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, hasTrunfo, isSaveButtonDisabled, nameFilter, rareFilter, trunfoFilter,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          onInputChange={ this.onInputChange }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
        />
        <section>
          <h2>Todas as cartas</h2>
          <h4>O termo pesquisado:</h4>
          <input
            type="text"
            data-testid="name-filter"
            placeholder="Digite o nome da carta"
            id="nameFilter"
            name="nameFilter"
            disabled={ trunfoFilter }
            value={ nameFilter }
            onChange={ this.onInputChange }
          />
          <select
            data-testid="rare-filter"
            type="select"
            id="rareFilter"
            name="rareFilter"
            disabled={ trunfoFilter }
            value={ rareFilter }
            onChange={ this.onInputChange }
          >
            Raridade
            <option value="todas">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
          <label htmlFor="trunfoFilter">
            Super Trunfo
            <input
              id="trunfoFilter"
              type="checkbox"
              data-testid="trunfo-filter"
              name="trunfoFilter"
              value={ trunfoFilter }
              onChange={ this.onInputChange }
            />
          </label>
          {this.renderCard().map((card) => (
            <div key={ card.cardName }>
              <Card
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardImage={ card.cardImage }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
                hasTrunfo={ card.hasTrunfo }
              />
              <button
                type="button"
                data-testid="delete-button"
                id={ card.cardName }
                onClick={ this.deleteCard }
              >
                Excluir
              </button>
            </div>
          ))}
        </section>
      </div>
    );
  }
}

export default App;
