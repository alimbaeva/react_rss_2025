import { Component } from 'react';
import { CatsDataType } from '../types/types';
import CardItem from './CardItem';
import IsLoading from './IsLoading';

interface ResultsProps {
  searchValue: string;
}

interface ResultsState {
  data: CatsDataType[];
  isLoading: boolean;
  error: string | null;
}

class Results extends Component<ResultsProps> {
  state: ResultsState = {
    data: localStorage.getItem('data')
      ? (JSON.parse(localStorage.getItem('data') as string) as CatsDataType[])
      : [],
    isLoading: false,
    error: null,
  };

  getCatsData = async () => {
    const apiKey =
      'live_jTLXI5GGxwquevnfnM4WJdb9R2nN2KBt7THZGwl6AYe7ChJvnQnrigW2VQp252SF';

    this.setState({ isLoading: true, error: null });

    try {
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${this.props.searchValue}&api_key=${apiKey}`
      );

      if (!response.ok) {
        throw new Error('Не удалось загрузить данные.');
      }

      const data: CatsDataType[] = await response.json();
      setTimeout(() => {
        this.setState({
          data: data,
          isLoading: false,
        });
        localStorage.setItem('data', JSON.stringify(data));
      }, 700);
    } catch (error: unknown) {
      this.setState({ ...this.state, error: error, isLoading: false });
    }
  };

  async componentDidMount() {
    const cachedData = localStorage.getItem('data');
    if (cachedData) {
      this.setState({ data: JSON.parse(cachedData) });
    } else {
      this.getCatsData();
    }
  }

  componentDidUpdate(prevProps: ResultsProps) {
    if (prevProps.searchValue !== this.props.searchValue) {
      this.getCatsData();
    }
  }

  render(): JSX.Element {
    const { isLoading, data, error } = this.state;

    if (isLoading) {
      return <IsLoading />;
    }

    if (error) {
      return <div className="error-message">{error}</div>;
    }

    if (data.length === 0) {
      return <div className="no-data-message">Нет данных для отображения</div>;
    }

    return (
      <div className="cards-wrapper">
        {data.map((el) => (
          <CardItem key={el.id} data={el} />
        ))}
      </div>
    );
  }
}

export default Results;
