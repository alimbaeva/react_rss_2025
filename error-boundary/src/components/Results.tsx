import { Component } from "react"

interface ResultsProps {
  searchValue: string;
}

interface CatImage {
  id: string;
  url: string;
}

interface ResultsState {
  images: CatImage[];
  isLoading: boolean;
  error: string | null;
}

class Results extends Component<ResultsProps> {
  state: ResultsState = {
    images: [],
    isLoading: true,
    error: null,
  };

  getCatsData = async () => {
    const apiKey = "live_jTLXI5GGxwquevnfnM4WJdb9R2nN2KBt7THZGwl6AYe7ChJvnQnrigW2VQp252SF";

    try {
        console.log(this.props.searchValue);
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${this.props.searchValue}&api_key=${apiKey}`
      );

      if (!response.ok) {
        throw new Error("Не удалось загрузить данные.");
      }

      const data: CatImage[] = await response.json();
      console.log({ images: data, isLoading: false });
      this.setState({ images: data, isLoading: false });
    } catch (error: any) {
      this.setState({ error: error.message, isLoading: false });
    }
  }

  async componentDidMount() {
    this.getCatsData()
  }

  componentWillUnmount() {
    this.getCatsData();
  }

  shouldComponentUpdate(nextProps: ResultsProps) {
    if (nextProps.searchValue === this.props.searchValue) return false;
    this.getCatsData();
    return true;
  }

  render(): JSX.Element {
      return (
          <div>
  
          </div>
      )
    }
}

export default Results
