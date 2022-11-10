import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { AuthContext } from '../../../../AuthProvider/AuthContextProvider';
import TotalReview from '../../../TotalReview/TotalReview';
import noReview from '../noreview.png'
import useTitle from '../../../../Hooks/UseTitle';


const ServicesDetails = () => {
    useTitle('Service Details');
    const service = useLoaderData();
    const { _id, title, price, img, description, ratting } = service;
    const { user } = useContext(AuthContext);

    const [reviews, setReviews] = useState({});

    

    


    useEffect(() => {
        fetch(`https://rtr-cloud-kitchen-server.vercel.app/allreview?serviceId=${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [_id])


    console.log(reviews)

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
                        user?.email ?
                            <>
                                <Link to={`/review/${_id}`}>
                                    <button className="text-xl text-white bg-red-600 p-2 gap-2 rounded-md flex shadow">Add Review<p className='pt-1 text-white'></p>
                                    </button>
                                </Link>

                            </>
                            :
                            <>
                                
                                    <Link to={`/review/${_id}`}>
                                        <button className="text-xl text-white bg-red-600 p-2 gap-2 rounded-md flex shadow">Login for Add Review<p className='pt-1 text-white'></p>
                                        </button>
                                    </Link>
                                
                            </>
                    }
                </div>
            </div>


            {
                reviews?.length !== 0 ?
                    <>
                        <div>
                            <h1 className='text-4xl text-center my-10'> Total Review: {reviews.length}</h1>

                            <div>
                                <div className="overflow-x-auto w-full">
                                    <table className="table w-full">

                                        <thead>
                                            <tr className='text-2xl '>
                                                <th className='text-xl'>Reviewer Image</th>
                                                <th className='text-xl'>Reviewer Information</th>
                                                <th className='text-xl text-center'>Review</th>

                                            </tr>
                                        </thead>
                                        <tbody>

                                            {

                                                reviews?.length && reviews?.map(review => <TotalReview
                                                    key={review._id}
                                                    reviews={review}
                                                ></TotalReview>

                                                )
                                            }

                                        </tbody>

                                    </table>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <img className='m-5 border rounded-lg' src={noReview} alt="" />
                    </>
            }


        </div>
    );
};

export default ServicesDetails;