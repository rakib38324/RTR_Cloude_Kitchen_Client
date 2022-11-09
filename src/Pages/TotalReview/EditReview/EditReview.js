import React, { useContext } from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthContextProvider';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import toast from 'react-hot-toast';
import useTitle from '../../../Hooks/UseTitle';

const EditReview = () => {
    useTitle('Edit Review');

    const service = useLoaderData();
    console.log(service)
    const { _id,serviceName, price, img,review } = service;
    const { user,loading } = useContext(AuthContext);

    if(loading){
        <progress className="progress text-center w-56"></progress>
    }
    

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'


    const handleUpdateReview = event => {
        event.preventDefault();
        
        const form = event.target;
        const review = form.review.value;
        const id= form.id.value;
        console.log(id,review)
       
        fetch(`http://localhost:5000/review/${id}`,{
            method: 'PATCH',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify({review})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            navigate(from, { replace: true });
            toast.success("You review Updated")
            
        })
        

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
                    <h2 className="card-title text-3xl">{serviceName}</h2>
                    <div className="card-actions justify-end">
                        <p className='text-2xl text-red-600 font-semibold'>Price: ${price}</p>
                    </div>
                </div>
            </div>
            <form onSubmit={handleUpdateReview} className='p-5'>
                <h2 className="text-4xl text-center my-10">Edit Your Review</h2>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Service ID</span>
                        </label>
                        <input type="text" name='id' placeholder={_id} className="input input-bordered" defaultValue={_id} required readOnly />
                    </div>

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

                    <textarea name='review' className="textarea textarea-bordered" placeholder={review}></textarea>
                </div>

                <input className='btn text-white bg-red-600 m-5' type="submit" value="Update Your Review" />
            </form>
        </div>


    );
};

export default EditReview;