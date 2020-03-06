import React, { Component } from 'react';
import NewSingle from './NewSingle';
import Error from './Error';
// import NewSingle from'./NewSingle.css';

const type = "top-headlines";
const country = "us";

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
            error: false
        }
    }

    componentDidMount() {
        //fetch the api
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
        .catch((error) => {
            this.setState({
                error: true

            })
        });
    }

    renderItems() {
        if (!this.state.error) {
        return this.state.news.map((item) => (        
                <NewSingle key={item.url} item={item} />
        ))
        }
        else {
            return <Error />
        }
    }

    //render files
    render() {
        return (
            <div className="row">
                {this.renderItems()}
            </div>
        )
    }
}

export default News;