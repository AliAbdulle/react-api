import React, { Component } from 'react';
import './App.css';
import News from './News/News';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news1: {
        type: 'top-headlines',
        query: 'sources=bbc-news'
      },
      news2: {
        type: 'everything',
        query: 'domains=wsj.com,nytimes.com'
      }
    };
  }

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
