import './Activity.css';

import React from 'react'

function Activity({title, job, section, desc, imgURL}) {
    return (
        <>
            <div className="activity-container">
                <div className="activity-left">
                    <img src={imgURL} alt="image"/>
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
