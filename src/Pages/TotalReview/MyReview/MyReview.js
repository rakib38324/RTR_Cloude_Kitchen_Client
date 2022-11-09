import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthContextProvider';
import MyReviewCard from './MyReviewCard';

const MyReview = () => {

    const {user} = useContext(AuthContext)

    const [reviews, setReviews] = useState({})
    
    const email= user?.email

    console.log(email)
    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [user?.email])

    console.log(reviews)

    return (
        <div>
            <h1 className='text-4xl text-center my-10'> Total Review: {reviews.length}</h1>

            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th>Date</th>
                                
                                <th>Service Information</th>
                                <th>Review</th>
                                <th>Edit</th>

                            </tr>
                        </thead>
                        <tbody>

                            {

                                reviews?.length && reviews?.map(review => <MyReviewCard
                                key={review._id}
                                    reviews={review}
                                ></MyReviewCard>

                                )
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyReview;