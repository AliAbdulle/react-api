import React, { Component } from 'react';
import './App.css';
import News from './News/News';
import sidenews from './News/Sidenews';

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
      },
      news3: {
        type: 'everything',
        query: 'domains=wsj.com,nytimes.com'
      }
    };
  }
  // render files
  render() {
    return (
      <div className="container-fluid" >
        <div className="navbar-fix">
          <div className="nav-wrapper indigo lighten-4">
            <a href="/" className="brain-logo center">My Feed</a>
          </div>
        </div>
        <div className="row">
          <div className="col s8">
            <News news={this.state.news1} />
            <News news={this.state.new2} />
          </div>
          <div className="col s4">
            <sidenews news3={this.state.news3} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
