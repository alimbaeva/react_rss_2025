import { Component, ReactNode } from 'react';
import { CatsDataType } from '../types/types';
import CardItem from './CardItem';
import './styles/result.scss';
import IsLoading from './IsLoading';
import { APIKEY, URLAPI_SEARCH } from '../veriables';

interface ResultState {
  data: CatsDataType[];
  isLoading: boolean;
  error: string | null;
}

interface ResultProps {
  searchValue: string;
  limit: number | null;
}

class Result extends Component<ResultProps, ResultState> {
  constructor(props: ResultProps) {
    super(props);
    this.state = {
      data: localStorage.getItem('data')
        ? (JSON.parse(localStorage.getItem('data') as string) as CatsDataType[])
        : [],
      isLoading: false,
      error: null,
    };
  }

  getCatsData = async () => {
    this.setState({ isLoading: true, error: null });

    try {
      const response = await fetch(
        `${URLAPI_SEARCH}limit=${this.props.limit ?? 100}&breed_ids=${this.props.searchValue}&api_key=${APIKEY}`
      );

      if (!response.ok) {
        throw new Error(
          `Ошибка ${response.status}: ${response.statusText}. Не удалось загрузить данные.`
        );
      }

      const data: CatsDataType[] = await response.json();
      setTimeout(() => {
        this.setState({
          ...this.state,
          data: data,
          isLoading: false,
        });
        localStorage.setItem('data', JSON.stringify(data));
      }, 700);
    } catch (err) {
      this.setState({ ...this.state, error: `${err}`, isLoading: false });
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

  componentDidUpdate(prevProps: ResultProps) {
    if (prevProps.searchValue !== this.props.searchValue) {
      this.getCatsData();
    }
  }

  render(): ReactNode {
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

export default Result;
