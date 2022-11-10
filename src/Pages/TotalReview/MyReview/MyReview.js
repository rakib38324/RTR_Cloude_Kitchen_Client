import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthContextProvider';
import MyReviewCard from './MyReviewCard';
import toast from 'react-hot-toast';
import noReview from '../../Home/Services/noreview.png'
import useTitle from '../../../Hooks/UseTitle';

const MyReview = () => {
    useTitle('My Review');

    const { user } = useContext(AuthContext)

    const [reviews, setReviews] = useState({})

    const email = user?.email

    console.log(email)
    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user?.email}`,{
            headers:{
                authorization: `Bearer ${localStorage.getItem('rtr-cloud-kitchen-token')}`
            }
        })
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [user?.email])

    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure want to delete the review");

        if (proceed) {
            fetch(`http://localhost:5000/review/${id}`, {
                method: 'DELETE',
                headers:{
                    authorization: `Bearer ${localStorage.getItem('rtr-cloud-kitchen-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    if (data.deletedCount > 0) {
                        toast.success("Deleted Successfully");
                        const remaining = reviews.filter(riv => riv._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }

    console.log(reviews)

    return (
        <div>

            {
                reviews?.length !== 0 ?
                    <>
                        <div>
                            <h1 className='text-4xl text-center my-10'> Total Review: {reviews.length}</h1>

                            <div>
                                <div className="overflow-x-auto w-full">
                                    <table className="table w-full">

                                        <thead>
                                            <tr >
                                                <th className='text-xl'>Delete</th>
                                                <th className='text-xl'>Date</th>
                                                <th className='text-xl'>Service Information</th>
                                                <th className='text-xl text-center'>Review</th>
                                                <th className='text-xl '>Edit</th>

                                            </tr>
                                        </thead>
                                        <tbody>

                                            {

                                                reviews?.length && reviews?.map(review => <MyReviewCard
                                                    key={review._id}
                                                    reviews={review}
                                                    handleDelete={handleDelete}
                                                ></MyReviewCard>

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
                        <img className='m-5 border  rounded-lg' src={noReview} alt="" />
                    </>
                    
            }
        </div>
    );
};

export default MyReview;