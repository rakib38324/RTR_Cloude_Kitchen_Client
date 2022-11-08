import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowCircleRight } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {
    const { _id, title, price, img, description, ratting } = service;
    return (
        <div className="card card-compact m-5 bg-base-100 shadow-xl">
            <PhotoProvider>
                <PhotoView src={img}>
                    <figure><img src={img} alt="" /></figure>
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title text-3xl">{title}</h2>
                <div className="">
                    
                    
                    <p className='text-2xl pb-3 text-red-600 font-semibold'>Price: ${price}</p>
                    <p className='text-xl pb-3 text-red-600 font-semibold'>Rating: {ratting}</p>
                    <p className='pb-5'>{description.slice(0, 100).concat("...")}</p>
                    
                    
                    <Link to={`/services/${_id}`}>
                        <button className="text-xl text-white bg-red-600 p-2 gap-2 rounded-md flex shadow"> Details <p className='pt-1 text-white'><FaArrowCircleRight /></p>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;