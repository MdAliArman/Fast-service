import React from 'react';

const TeamItems = ({team}) => {
    const {img, name}=team
    return (
        <div className="card w-96 glass">
        <figure><img src={img} alt="car!" /></figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>How to park your car at your garage?</p>
            
        </div>
    </div>
    );
};

export default TeamItems;