import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowCircleRight } from 'react-icons/fa';

const ServiceCard = ({service}) => {
    const { _id, title, price, img,description } = service;
    return (
        <div className="card card-compact m-5 bg-base-100 shadow-xl">
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions justify-end">
                    <p className='text-2xl text-red-600 font-semibold'>Price: ${price}</p>
                    <p>{description.slice(0,100).concat("...")}</p>
                    <Link to={`/checkout/${_id}`}>
                        <button className="text-2xl text-red-600"><FaArrowCircleRight /></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;