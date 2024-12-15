import { Component } from 'react';
import Results from "../components/Results";
import TopControls from "../components/TopControls";
import './app.scss'

interface AppState {
  searchValue: string;
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      searchValue: localStorage.getItem("searchValue") ?? ''
    }
  }

  handleSearch = (query: string) => {
    this.setState({ searchValue: query });
    console.log(query)
  };

  render() {
    return (
      <div>
        <TopControls onSearch={this.handleSearch} />
        <Results searchValue={this.state.searchValue} />
      </div>
    );
  }
}

export default App;
