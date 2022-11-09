import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowCircleRight } from 'react-icons/fa';
import ServiceCard from '../ServiceCard/ServiceCard';

const AllServices = () => {

    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    })


    return (
        <div>
            <div className='text-center  w-1/2 mx-auto my-16'>
                
                <h2 className="text-3xl text-red-600 font-bold pb-3">Our ALL Services</h2>
                <p>We specialize in commercial Kitchen hood installation and repairs. Fast local services with a satisfaction guarantee. Air conditioning Problems? We can Help! </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard 
                    key={service._id}
                    service={service}
                    ></ServiceCard>) 
                }
            </div>
            
        </div>
    );
};

export default AllServices;