import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowCircleRight } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { AuthContext } from '../../../../AuthProvider/AuthContextProvider';

const ServicesDetails = () => {
    const service = useLoaderData();
    const { _id, title, price, img, description, ratting } = service;
    const { user } = useContext(AuthContext);
    return (
        <div className="card card-compact m-5 bg-base-100 shadow-xl">


            <PhotoProvider>
                <PhotoView src={img}>
                    <figure><img src={img} alt="" /></figure>
                </PhotoView>
            </PhotoProvider>


            <div className="card-body">
                <h2 className="card-title text-3xl">{title}</h2>
                <div className="card-actions justify-end">
                    <p className='text-2xl text-red-600 font-semibold'>Price: ${price}</p>
                    <div>
                        <p className='text-xl text-red-600 font-semibold'>Rating: {ratting}</p>
                    </div>
                    <p>{description}</p>


                    {
                        user?.email?
                            <>
                                <Link to={`/review/${_id}`}>
                                    <button className="text-xl text-white bg-red-600 p-2 gap-2 rounded-md flex shadow">Add Review<p className='pt-1 text-white'></p>
                                    </button>
                                </Link>

                            </>
                            :
                            <>
                                <Link to={`/review/${_id}`}>
                                    <button className="text-xl text-white bg-red-600 p-2 gap-2 rounded-md flex shadow">Log in Add Review<p className='pt-1 text-white'></p>
                                    </button>
                                </Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default ServicesDetails;