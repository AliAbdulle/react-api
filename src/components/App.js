import React, { Component } from 'react';
import './App.css';
import News from './News/News';

class App extends Component {
  // Construtor
  constructor(props) {
    super(props);
    this.state = {
      news1: {
        type: 'top-headlines',
        country: 'us'
      },
      news2: {
        type: 'everything',
        query: 'dapple&from=2020-02-28&to=2020-02-28&sortBy=popularity'
      }
    };
  }
// render files
  render() {
  return(
    <div className="App" >
      <header className="App-header">
        <h1 className="App-title">My News Feeds</h1>
      </header>
      <News news={this.state.news1} />
      <News news={this.state.new2} />
    </div>
  );
}
}

export default App;
