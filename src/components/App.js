import React, { Component } from 'react';
import './App.css';
import News from './News/News';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news1: {
        type: 'top-headline',
        query: 'source=bbc-news'
      },
      news1: {
        type: 'everything',
        query: 'domins=techcrunch.com&language=en'
      }
    };
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <h1 className="App-title">My News Feeds</h1>
        </header>
        <News />
      </div>
    );
  }
}

export default App;
