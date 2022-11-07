import React from 'react';
import img1 from '../Banner/bannerImages/pic1.jpg'
import img2 from '../Banner/bannerImages/pic2.jpg'
import img3 from '../Banner/bannerImages/pic3.jpg'
import './Banner.css'
import BannerItems from './BannerItems/BannerItems';

const bannerData = [
    {
        image: img1,
        prev: 3,
        id: 1,
        next: 2,
    },
    {
        image: img2,
        prev: 1,
        id: 2,
        next: 3,
    },
    {
        image: img3,
        prev: 2,
        id: 3,
        next: 1,
    }
]

const Banner = () => {
    return (
        <div>
        <div className="carousel w-full py-10">

            {
                bannerData.map(slide => <BannerItems
                key={slide.id}
                slide={slide}             
                ></BannerItems>)
                                   
            }

        </div>
    </div>
        
    );
};

export default Banner;