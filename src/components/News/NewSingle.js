import React from 'react';
// import '/newwSingle.css';

const newSingle = ({item}) => (  
    //create cards
    <div className='col s4'>
        <div className="card">
            <div className="card-image">
                <img src={item.urlToImage} alt={item.title} />
                <p className="card-title">{item.source.name}</p>
            </div>
            <div className="card-content">
                <p>{item.title}</p>
            </div>
            <div className="card-action">
                <a href={item.url} target="_blank">Full Article</a>
            </div>
        </div>
    </div>
)

export default newSingle;
