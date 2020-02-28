import React, { Component } from 'react';
import NewSingle from './NewsSingle';

class News extends Component {
    renderItems() {
        return this.props.item.map((item) => {
            <NewSingle key={item.id} item={item} />
        })
    }
    render() {
        return (
            <ul>
                {this.renderItems()}
            </ul>
        )
    }
}

export default News;