import { ChangeEvent, Component, FormEvent, MouseEvent } from 'react';
import { CatBreed } from '../types/types';

interface TopControlsProps {
  onSearch: (query: string) => void;
}

interface Breed {
  id: string;
  name: string;
}

class TopControls extends Component<TopControlsProps> {
  state = {
    inputValue: localStorage.getItem('searchValue') ?? '',
    idValue: localStorage.getItem('idValue') ?? '',
    breeds: [] as Breed[],
    inputOptions: [] as Breed[],
    showListBreeds: false,
    error: null,
  };

  async fetchBreeds() {
    try {
      const response = await fetch('https://api.thecatapi.com/v1/breeds');
      const data: CatBreed[] = await response.json();

      const dataBread: Breed[] = [];
      data.map((el) => dataBread.push({ id: el.id, name: el.name }));
      this.setState({ breeds: dataBread });
      if (!this.state.inputValue.length) {
        this.setState({
          inputOptions: dataBread,
          showListBreeds: true,
        });
      }
    } catch (error: unknown) {
      this.setState({ error: 'Ошибка загрузки списка пород' });
      return Error(`${error}`);
    }
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    this.setState({
      showListBreeds: true,
    });
    this.setState({ inputValue: value });
    const filterBreads = this.state.breeds.filter((el) =>
      el.name.toLowerCase().includes(value)
    );
    this.setState({
      inputOptions: filterBreads,
    });
  };

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    localStorage.setItem('searchValue', this.state.inputValue);
    this.props.onSearch(this.state.idValue);
    this.setState({
      showListBreeds: false,
    });
  };

  handleBreedItem = (event: MouseEvent<HTMLLIElement>) => {
    const eventId = (event.currentTarget as HTMLLIElement).dataset.id as string;
    const eventName = (event.currentTarget as HTMLLIElement)
      .textContent as string;
    this.setState({
      showListBreeds: false,
    });
    this.setState({
      ...this.state,
      showListBreeds: false,
      idValue: eventId,
      inputValue: eventName,
    });

    localStorage.setItem('searchValue', eventName);
    localStorage.setItem('idValue', eventId);
  };

  async componentDidMount() {
    this.fetchBreeds();
  }

  componentWillUnmount() {
    this.fetchBreeds();
    this.setState({
      showListBreeds: false,
    });
  }

  handleCustomError = () => {
    this.setState({ error: new Error('Custom error triggered.') });
  };

  componentDidUpdate() {
    if (this.state.error) throw this.state.error;
  }

  render(): JSX.Element {
    return (
      <div className="controls-wrapper">
        <form onSubmit={this.handleSubmit}>
          <div className="input-wrapper">
            <input
              type="text"
              value={this.state.inputValue}
              onChange={this.handleChange}
              placeholder="Введите текст для поиска"
            />
            {this.state.showListBreeds && (
              <ul className="wrapper-breed">
                {this.state.inputOptions.map((el, index) => {
                  return (
                    <li
                      className="breed-item"
                      key={el.id + index}
                      data-id={el.id}
                      onClick={this.handleBreedItem}
                    >
                      {el.name}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
          <button type="submit">Search</button>
        </form>
        <button
          onClick={this.handleCustomError}
          type="button"
          className="error-btn"
        >
          Error Button
        </button>
      </div>
    );
  }
}

export default TopControls;
