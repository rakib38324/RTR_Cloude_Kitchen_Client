import React from 'react';
import picture from './image/pic.jpg'

const DiscoverKitchen = () => {
    return (
        <div className="hero my-5 py-10 bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={picture} className="max-w-xs rounded-lg shadow-2xl" />
                <div className='text-center w-1/2'>
                    <h1 className="text-3xl font-bold">Discover Our Kitchen!</h1>
                    <p className="py-2">Menuland's vision was to create the first digital cloud kitchen in Slovakia. From the beginning of the project, our studio was in charge of the complete digital materialization of the idea and worked in close cooperation with the internal development team of Menuland.</p>
                    <button className="btn btn-ghost btn-active">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default DiscoverKitchen;