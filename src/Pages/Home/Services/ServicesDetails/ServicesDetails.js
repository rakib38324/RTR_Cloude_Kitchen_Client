import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowCircleRight } from 'react-icons/fa';

const ServicesDetails = () => {
    const service = useLoaderData();
    const { _id, title, price, img,description,ratting } = service;
    return (
        <div className="card card-compact m-5 bg-base-100 shadow-xl">
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl">{title}</h2>
                <div className="card-actions justify-end">
                    <p className='text-2xl text-red-600 font-semibold'>Price: ${price}</p>
                    <div>
                    <p className='text-xl text-red-600 font-semibold'>Rating: {ratting}</p>
                    </div>
                    <p>{description}</p>
                    <Link to={``}>
                        <button className="text-2xl text-red-600"><FaArrowCircleRight /></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetails;