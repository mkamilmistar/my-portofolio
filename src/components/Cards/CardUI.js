import React from 'react'
import './Card.css';

function Card({title,imgURL,body,small,link}) {
    return (
        <div className="card-container">
            <div className="img-container">
                <img src={imgURL} alt=""/>
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h3>{title}</h3>
                </div>
                <div className="card-body">
                    <p>{body}</p>
                </div>
                <div className="card-small">
                    <h4>{small}</h4>
                </div>
            </div>
            
            <div className="btn">
                <button>
                    <a href={link} target="_blank">Code</a>
                </button>
            </div>
        </div>
    )
}

export default Card
