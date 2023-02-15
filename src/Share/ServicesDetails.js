import React from 'react';

const ServicesDetails = ({service}) => {
    console.log(service)
    const {title, des, img, price}=service
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={`https://ultahome.com/wp-content/uploads/2021/04/professional-painters-1024x682.jpg`} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{des}</p>
                <p className='text-xs font-medium' >Price : ${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetails;