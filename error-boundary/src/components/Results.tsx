import { Component } from "react"
import { CatsDataType } from "../types/types";

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
    data: localStorage.getItem("data") ? (JSON.parse(localStorage.getItem("data") as string) as CatsDataType[]) : [],
    isLoading: true,
    error: null,
  };

  getCatsData = async () => {
    const apiKey = "live_jTLXI5GGxwquevnfnM4WJdb9R2nN2KBt7THZGwl6AYe7ChJvnQnrigW2VQp252SF";

    try {
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${this.props.searchValue}&api_key=${apiKey}`
      );

      if (!response.ok) {
        throw new Error("Не удалось загрузить данные.");
      }

      const data: CatsDataType[] = await response.json();
      this.setState({ 
        ...this.state,
        data: data,
        isLoading: false 
      });
      localStorage.setItem("data", JSON.stringify(data))
    } catch (error: any) {
      this.setState({ ...this.state, error: error.message, isLoading: false });
    }
  }

  async componentDidMount() {
    this.getCatsData()
  }

  shouldComponentUpdate(nextProps: ResultsProps) {
    return nextProps.searchValue !== this.props.searchValue;
  }

  componentDidUpdate(prevProps: ResultsProps) {
    if (prevProps.searchValue !== this.props.searchValue) {
      this.getCatsData();
    }
  }

  render(): JSX.Element {
    return (
      <div>
        {
          this.state.data.map((el) => (
            <div key={el.id}>
              <img src={el.url} alt={el.breeds[0].name} />
              <div>
                <p>Name: {el.breeds[0].name}</p>
                <p>Origin: {el.breeds[0].origin}</p>
                <p>Temperament: {el.breeds[0].temperament}</p>
                <p>Weight: {el.breeds[0].weight.imperial}</p>
                <p>{el.breeds[0].description}</p>
                <p></p>
              </div>
            </div>
          ))
        }
      </div>
    )
    }
}

export default Results
