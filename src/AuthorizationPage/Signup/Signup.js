import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthContextProvider';
import { getAuth, updateProfile } from 'firebase/auth';
import app from '../../Firebase/Firebase.config';
import toast from 'react-hot-toast';

const auth = getAuth(app)

const Signup = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const { createUser, signUpWitGoogle, notify } = useContext(AuthContext);

    const updateProfileInfo = (name, picture) => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: picture
        }).then(() => {
            // Profile updated!
            // ...
        }).catch((error) => {
            // An error occurred
            // ...
            toast.error(error)
        });

    }

    const handleRegistratio = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const Confirm = form.confirmPassword.value;
        const picture = form.ulr.value;
        

        if (password.length < 6) {
            toast.error("Password should be 6 character or more")
            return;
        }

        if (password !== Confirm) {
            toast.error("Your Password did not match")
            return;
        }

        createUser(email, password,name, picture)
            .then(result => {
                const user = result.user;
                console.log(user)
                notify("Your Account Create Successfully");
                updateProfileInfo(name, picture);
                form.reset();
                navigate(from, { replace: true });
                toast.success("Login Successfully")
            })
            .catch(error => {
                console.log(error)
                toast.error("Email Already Used")
            })
    }



    const handleloginWithGoolge = () => {
        // console.log('click')
        signUpWitGoogle()
            .then(result => {
                const user = result.user;
                // console.log(user)
                toast.success("Login Successfully")
            })
            .catch(error => console.log(error))
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl text-center font-bold">Sign Up now!</h1>
                    <p className="py-6">Please provide you Name, Email and Password for Registration. You also Register with Google.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegistratio} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Picture URL</span>
                            </label>
                            <input type="text" name='ulr' placeholder="picture url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='confirmPassword' placeholder="confirm password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Registration</button>
                        </div>

                    </form>
                    <div>
                        <p className='text-center '>Or Registration in with</p>

                        <div className="form-control mx-8 mt-6 mb-3">
                            <button onClick={handleloginWithGoolge} className="text-2xl text-center btn btn-ghost btn-active">
                             <div className='flex'>
                                <div className='text-3xl pr-5'><FaGoogle /></div>
                                <div>Google </div>
                            </div>
                            </button>
                        </div>
                        <p className='text-center mb-5'>New to RTR Cloud Kitchen <Link className='text-blue-600 font-bold' to='/login'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;