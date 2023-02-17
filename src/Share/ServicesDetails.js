import React from 'react';

const ServicesDetails = ({service}) => {
    const {title, des, img, price}=service
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={img} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{des}</p>
                <p className='text-xs font-medium' >Price : ${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">See More</button>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetails;