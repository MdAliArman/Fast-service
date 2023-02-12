import React from 'react';
import  './Banner.css'
const BannerItam = ({br}) => {
    const{image, id , next, prev}=br
    return (
     
             <div id={`slide${id}`} className="carousel-item relative w-full">
                <div className="carusal-img">
                    <img src={image} className="w-full h-full" alt='' />
                    </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 w-1/2 mx-auto">
                    <h1 className='text-5xl font-bold text-center text-white'>
                        We Are The Best Home Service For  Making Your Home Shine
                    </h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-2/3 w-1/2 mx-auto">
                    <p className='text-xl  text-center text-white'>
                        Some quick example text to build on the Fast Service and make up the bulk of the card's content
                    </p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                    <a href={`#slide${next}`} className="btn btn-circle">❯</a>
                </div>
            </div>
       
    );
};

export default BannerItam;