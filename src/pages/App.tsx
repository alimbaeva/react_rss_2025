import { Component } from 'react';
import TopControls from '../components/TopControls';
import Results from '../components/Results';
import './app.scss';
import EmptyData from '../components/EmptyData';

interface AppState {
  searchValue: string;
  limit: number | null;
}

class App extends Component<unknown, AppState> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      searchValue: localStorage.getItem('idValue') ?? '',
      limit: null,
    };
  }

  handleSearch = (query: string) => {
    this.setState({ searchValue: query, limit: 10 });
  };

  async componentDidMount() {
    if (!this.state.searchValue) {
      this.setState({ ...this.state, searchValue: 'abys' });
    }
    if (this.state.searchValue) {
      this.setState({ ...this.state, limit: 10 });
    }
  }

  render() {
    return (
      <div className="main-page">
        <TopControls onSearch={this.handleSearch} />
        {this.state.searchValue && (
          <Results
            searchValue={this.state.searchValue}
            limit={this.state.limit}
          />
        )}
        {!this.state.searchValue && <EmptyData />}
      </div>
    );
  }
}

export default App;
