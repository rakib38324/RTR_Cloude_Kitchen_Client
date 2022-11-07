import React from 'react';

const BannerItems = ({slide}) => {

    const {image,id,prev,next} = slide;

    return (
        
            <div id={`slide${id}`} className="carousel-item relative w-full">

                <div className='carousel-img'>
                    <img src={image} alt='' className="w-full rounded-xl" />
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4">
                    <h1 className='text-6xl font-bold text-white'>
                    Healthy food is food <br />
                    that gives you all the nutrients <br />
                    you need to stay healthy
                    </h1>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 w-3/4 left-24  top-1/2">
                    <p className='text-xl text-white'>Have vegetables, salad or fruit with every meal – they are packed with vitamins, minerals and fibre that are good for your health, help you feel full, and protect you from chronic diseases. Eat a variety of colours for the best mix of protective nutrients. At least five servings of vegetables, salad and fruit is recommended for a healthy diet.</p>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24  top-3/4">
                    <button className="btn text-white bg-red-600 mr-5">Discover More</button>
                    <button className="btn btn-outline text-white">Go To Review</button>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href={`#slide${prev}`} className="btn btn-circle bg-red-600 mr-5">❮</a>
                    <a href={`#slide${next}`} className="btn bg-red-600 btn-circle">❯</a>
                </div>
            </div>
        
    );
};

export default BannerItems;