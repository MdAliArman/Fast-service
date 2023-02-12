import React from 'react';
import Banner1 from '../../asset/Banner/banner1.png'
import Banner2 from '../../asset/Banner/banner2.jpg'
import Banner3 from '../../asset/Banner/banner3.jpg'
import BannerItam from './BannerItam';

const Banner = () => {

    const bannerData=[
        {
            image: Banner1,
            prev: 3,
            id:1,
            next: 2
        },
        {
            image: Banner2,
            prev: 1,
            id:2,
            next: 3
        },
        {
            image: Banner3,
            prev: 2,
            id:3,
            next: 1
        }
    ]

    return (

        <div className="carousel w-full py-4">
           {
            bannerData.map(br=><BannerItam key={br.id} br={br}></BannerItam>)
           }
        </div> 

    );
};

export default Banner;