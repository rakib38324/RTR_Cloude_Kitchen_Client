import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard/ServiceCard';



const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    })


    return (
        <div>
            <div className='text-center  w-1/2 mx-auto my-16'>
                
                <h2 className="text-3xl text-red-600 font-semibold pb-3">Our Service Area</h2>
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
            <div className='text-center'>
            <button className=' p-3 mt-10 mb-60 font-bold border rounded-md border-orange-600  text-red-500  hover:bg-red-700 hover:text-white'>See All Services</button>
            </div>
        </div>
    );
};

export default Services;