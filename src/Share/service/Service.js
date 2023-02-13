import React from 'react';

const Service = ({ser}) => {
    const{title, des, price, img}=ser;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                {
                    des.length > 100 ?
                    <p>{des.slice(0,100) + '....'}</p>
                    :
                    des
                }
                <p className='text-l'>Price: $ {price}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;