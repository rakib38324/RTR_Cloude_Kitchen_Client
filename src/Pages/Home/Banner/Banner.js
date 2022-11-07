import React from 'react';
import img1 from '../Banner/bannerImages/pic1.jpg'
import img2 from '../Banner/bannerImages/pic2.jpg'
import img3 from '../Banner/bannerImages/pic3.jpg'

const Banner = () => {
    return (
        <div>
            <div className="carousel mx-5 rounded-lg mt-10">
                <div id="item1" className="carousel-item w-full">
                    <img src={img1} className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={img2} className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={img3} className="w-full" />
                </div>
                
            </div>
            <div className="flex justify-center w-full py-2 mb-16 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>
        </div>

    );
};

export default Banner;