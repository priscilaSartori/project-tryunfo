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
    filterName: '',
  };

  buttonSave = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
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
    } else {
      this.setState({ isSaveButtonDisabled: false });
    }
  };

  cardTrunfo = () => {
    const { cardTrunfo } = this.state;
    if (cardTrunfo) {
      this.setState({ hasTrunfo: true });
    } else {
      this.setState({ hasTrunfo: false });
    }
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => { this.buttonSave(); this.cardTrunfo(); });
  };

  onSaveButtonClick = () => {
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
      listCard,
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
      hasTrunfo,
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
      hasTrunfo: false,
    });
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
    });
  };

  onSearchChange = (event) => {
    this.setState({
      filterName: event.target.value,
    });
  };

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
      listCard,
      filterName,
    } = this.state;

    const cardFilterName = listCard.filter((card) => card.cardName.includes(filterName));

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
          <h4>
            O termo pesquisado é:
            {' '}
            {filterName}
          </h4>
          <input
            type="text"
            data-testid="name-filter"
            placeholder="Digite o nome da carta"
            onChange={ this.onSearchChange }
          />
          {cardFilterName.map((card) => (
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
