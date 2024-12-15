import { Component } from "react"

interface ResultsProps {
    searchValue: string;
  }

class Results extends Component<ResultsProps> {
  state = {};

  render(): JSX.Element {
    console.log(this.props.searchValue);
      return (
          <div>
  
          </div>
      )
    }
}

export default Results
