import './Activity.css';

import React from 'react'

function Activity({title, job, section, desc, img}) {
    return (
        <>
            <div className="activity-container">
                <div className="activity-left">
                    <img src={img} alt="image"/>
                </div>
                <div className="activity-right">
                    <div className="activity-title">
                        <h2>{title}</h2>
                        <h3>{job}</h3>
                        <h4>{section}</h4>
                    </div>
                    <p>{desc}</p>
                </div>
            </div>   
        </>
    )
}

export default Activity
