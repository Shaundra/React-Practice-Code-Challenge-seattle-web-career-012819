import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()
    this.state = {
      sushiList: []
    }
  }

  componentDidMount() {
     fetch(API)
      .then(response => response.json())
      .then(sushiList => {
        sushiList = sushiList.map(sushi => {
          return {...sushi, isEaten: false}
        })
        this.setState({sushiList})
      })
  }

  handleSushiState = () => {
    this.setState()
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushiList={this.state.sushiList}/>
        <Table />
      </div>
    );
  }
}

export default App;
