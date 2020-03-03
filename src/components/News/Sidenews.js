import React, { Component } from 'react';
import NewSingle from './NewSingle';
import Singleside from './Singleside';
// import NewSingle from'./NewSingle.css';

const type = "top-headlines";
const country = "us";

class Sidenews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidenws: [],
        }
    }

    componentDidMount() {
        
    }

    renderItems() {
        return this.state.news.map((item) => (        
                <NewSingle key={item.url} item={item} />
        ))
    }
    render() {
        return (
            <div className="row">
                {this.renderItems()}
            </div>
        )
    }
}

export default News;