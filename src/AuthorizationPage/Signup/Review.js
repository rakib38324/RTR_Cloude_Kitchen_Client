import React, { useContext } from 'react';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthContextProvider';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import toast from 'react-hot-toast';
import useTitle from '../../Hooks/UseTitle';

const Review = () => {
    useTitle('Review');

    const service = useLoaderData();
    const { _id, title, price, img, description, ratting } = service;
    const { user } = useContext(AuthContext);
    const time = new Date().toLocaleTimeString();
    const date = new Date().toLocaleDateString();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    // console.log(time)


    const handlePlaceReview = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = user?.email;
        const costomerImg = user?.photoURL;
        const review = form.review.value;

        const reviews = {
            serviceId: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            review,
            img,
            costomerImg,
            time,
            date
        }

        // console.log(_id,title,price,name,email,review,img)


        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Thanks for Your Review")
                    form.reset();
                    navigate(from, { replace: true });
                }
            })
            .catch(error => console.log(error))

    }

    return (
        <div>
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

                    </div>
                </div>
            </div>
            <form onSubmit={handlePlaceReview} className='p-5'>
                <h2 className="text-4xl text-center my-10">Please Give us Your Review</h2>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="email" className="input input-bordered" defaultValue={user?.displayName} required readOnly />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" defaultValue={user?.email} required readOnly />
                    </div>



                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Write Your Review</span>
                    </label>

                    <textarea name='review' className="textarea textarea-bordered" placeholder="Your Review..."></textarea>
                </div>

                <input className='btn text-white bg-red-600 m-5' type="submit" value="Submit Your Review" />
            </form>
        </div>
    );
};

export default Review;