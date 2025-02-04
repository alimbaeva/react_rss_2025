import {
  ChangeEvent,
  Component,
  FormEvent,
  ReactNode,
  MouseEvent,
} from 'react';
import { Breed, CatBreed } from '../types/types';
import './styles/topControls.scss';
import { ERRORLOADING, URLAPI } from '../veriables';

interface TopControlsState {
  inputValue: string;
  idValue: string;
  error: { message: string } | null;
  breeds: Breed[];
  inputOptions: Breed[];
  showListBreeds: boolean;
}

interface TopControlsProps {
  onSearch: (query: string) => void;
}

class TopControls extends Component<TopControlsProps, TopControlsState> {
  constructor(props: TopControlsProps) {
    super(props);
    this.state = {
      inputValue: localStorage.getItem('searchValue') ?? '',
      idValue: localStorage.getItem('idValue') ?? '',
      breeds: [],
      inputOptions: [],
      showListBreeds: false,
      error: null,
    };
  }

  async fetchBreeds() {
    try {
      const response = await fetch(URLAPI);

      if (!response.ok) {
        throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
      }

      const data: CatBreed[] = await response.json();

      const dataBread: Breed[] = [];
      data.map((el) => dataBread.push({ id: el.id, name: el.name }));
      this.setState({ breeds: dataBread });
      if (!this.state.inputValue.length) {
        this.setState({
          inputOptions: dataBread,
          showListBreeds: false,
        });
      }
    } catch (error: unknown) {
      this.setState({ error: { message: ERRORLOADING } });
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

    if (!filterBreads.length) {
      this.setState({
        idValue: '',
        inputOptions: filterBreads,
      });
    }

    this.setState({
      inputOptions: filterBreads,
    });
  };

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    localStorage.setItem('searchValue', this.state.inputValue);
    if (this.state.idValue) this.props.onSearch(this.state.idValue);
    if (!this.state.idValue || !this.state.inputValue) {
      this.setState({
        ...this.state,
        idValue: '',
        inputValue: '',
      });
      localStorage.setItem('searchValue', '');
      localStorage.setItem('idValue', '');
      this.props.onSearch('');
    }
  };

  handleBreedItem = (event: MouseEvent<HTMLLIElement>) => {
    const eventId = (event.currentTarget as HTMLLIElement).dataset.id as string;
    const eventName = (event.currentTarget as HTMLLIElement)
      .textContent as string;
    this.setState({
      ...this.state,
      showListBreeds: false,
      idValue: eventId,
      inputValue: eventName,
    });

    localStorage.setItem('searchValue', eventName);
    localStorage.setItem('idValue', eventId);
  };

  handleCustomError = () => {
    this.setState({
      ...this.state,
      error: new Error('Custom error triggered.'),
    });
  };

  async componentDidMount() {
    this.fetchBreeds();
  }

  componentWillUnmount() {
    this.fetchBreeds();
    this.setState({
      ...this.state,
      showListBreeds: false,
    });
  }

  componentDidUpdate() {
    if (this.state.error) throw this.state.error;
  }

  render(): ReactNode {
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
              <>
                {this.state.inputOptions.length ? (
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
                ) : null}
              </>
            )}
          </div>
          <button>Search</button>
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
