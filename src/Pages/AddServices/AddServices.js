import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../Hooks/UseTitle';


const AddServices = () => {
    useTitle('Add Service');

    const [service, setServices] = useState({});

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
   

    const handleAddService = event => {
        event.preventDefault();
        // console.log(service)

        fetch('https://rtr-cloud-kitchen-server.vercel.app/services/',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success("Service Add Successfully")
                event.target.reset();
                event.target.reset();
                navigate(from, { replace: true });
            }
        })
    }

    const handleInputBlur = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newService = { ...service };
        newService[field] = value;
        setServices(newService);
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl text-center font-bold">Please Add Your Service</h1>
                    <p className="py-6 text-center">Please provide all information in your service And double checked your information other wise you can not achieve good review</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={ handleAddService} className="card-body">
                       
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Name</span>
                            </label>
                            <input onBlur={handleInputBlur} type="text" name='title' placeholder="Service Name" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input onBlur={handleInputBlur} type="text" name='ratting' placeholder="Rating" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Image URL</span>
                            </label>
                            <input onBlur={handleInputBlur} type="text" name='img' placeholder="Service Image URL" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input onBlur={handleInputBlur} type="text" name='price' placeholder="price" className="input input-bordered" />
                        </div>

                        

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            
                            <textarea onBlur={handleInputBlur} name='description' className="textarea textarea-bordered" placeholder="description"></textarea>
                        </div>
                        
                        <div className="form-control mt-6">
                            <button className="btn bg-red-500">Add Service</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddServices;