import React, { Component } from 'react';
import axios from 'axios';
import Singleside from './Singleside';
import Error from './Error';
// import NewSingle from'./NewSingle.css';

const type = "top-headlines";
const country = "us";

class Sidenews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidenews: [],
            error: false

        }
    }

    componentDidMount() {
        //fetch run a side components
        const url = `http://newsapi.org/v2/${type}?country=${country}&apiKey=11d2c66f6cf0407481155a121f0a198a`;

        axios.get(url)
            .then((response) => {
                this.setState({
                    sidenews: response.data.articles
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
            return this.state.sidenews.map((item) => (
                <Singleside key={item.url} item={item} />
            ))
        }
        else {
            return <Error />
        }
    }
    render() {
        return (
            <div>
                {this.renderItems()}
            </div>
        )
    }
}

export default Sidenews;