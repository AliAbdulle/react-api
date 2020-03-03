import React, { Component } from 'react';
import NewSingle from './NewSingle';
import Singleside from './Singleside';
import axios from 'axios';
// import NewSingle from'./NewSingle.css';

const type = "top-headlines";
const country = "us";

class Sidenews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidenews: [],
        }
    }

    componentDidMount() {
        const url =`http://newsapi.org/v2/${type}?country=${country}&apiKey=11d2c66f6cf0407481155a121f0a198a`;

        axios.get(url)
        .then((response) => {
            this.setState({
                sidenews: response.data.articles
            })
        }) 
        
        .catch((error) => console.log(error));
    }

    renderItems() {
        return this.state.sidenews.map((item) => (        
                <Singleside key={item.url} item={item} />
        ))
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