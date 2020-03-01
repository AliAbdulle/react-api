import React, { Component } from 'react';
import NewSingle from './NewSingle';
import NewSingle from'./NewSingle.css';

const type = "top-headlines";
const country = "us";

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
        }
    }

    componentDidMount() {
        const url =`http://newsapi.org/v2/${type}?country=${country}&apiKey=11d2c66f6cf0407481155a121f0a198a`;

        fetch(url)
        .then((response) => {
            return response.json();
        })

        .then((data) => {
            this.setState({
                news: data.articles
            })
        })
        .catch((error) => console.log(error));
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