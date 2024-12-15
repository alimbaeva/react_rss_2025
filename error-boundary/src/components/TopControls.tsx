import { ChangeEvent, Component, FormEvent } from "react"

interface TopControlsProps {
  onSearch: (query: string) => void;
}

class TopControls extends Component<TopControlsProps> {
  state = {
    inputValue: "",
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    this.setState({ inputValue: value });
  };

  handleSubmit = (event: FormEvent) => {
      event.preventDefault();
      localStorage.setItem("searchValue", this.state.inputValue);
      this.props.onSearch(this.state.inputValue); 
  }
    
  render(): JSX.Element {
    return (
        <form onSubmit={this.handleSubmit}>
            <input 
              type="text"
              value={this.state.inputValue}
              onChange={this.handleChange}
              placeholder="Введите текст для поиска"
            />
            <button type="submit">Search</button>
        </form>
    )
  }
}

export default TopControls
