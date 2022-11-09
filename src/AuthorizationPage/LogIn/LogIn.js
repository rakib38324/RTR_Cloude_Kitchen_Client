import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthContextProvider';
import toast from 'react-hot-toast';
import useTitle from '../../Hooks/UseTitle';
import loginImg from '../login.webp'

const LogIn = () => {
    useTitle('Login');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const { login, signUpWitGoogle, user } = useContext(AuthContext);


    const handleLogIn = (event) => {


        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;






        login(email, password)
            .then(result => {
                const user = result.user;
                toast.success("Login Successfully")
                form.reset();



                const currentUser = { email: user.email }



                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        // local storage is the easiest but not best option store token
                        localStorage.setItem('rtr-cloud-kitchen-token', data.token)
                        navigate(from, { replace: true });
                    });




            })
            .catch(error => {
                toast.error("Your Email or Password Wrong")
                console.log(error)
            })
    }

    const handleLoginWithGoogle = () => {

        signUpWitGoogle()
            .then(result => {
                const user = result.user;
                // console.log(user.email)
                toast.success("Login Successfully")
                const currentUser = { email: user.email }


                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        // local storage is the easiest but not best option store token
                        localStorage.setItem('rtr-cloud-kitchen-token', data.token)
                        navigate(from, { replace: true });
                    });

            })
            .catch(error => console.log(error))

    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl text-center font-bold">Login now!</h1>
                    <p className="text-center my-5">Please provide you valid email and password for login. You also login with Google.</p>
                    <div><img className='w-96 mt-10 mx-auto' src={loginImg} alt="" /></div>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogIn} className="card-body">
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
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-red-600">Login</button>
                        </div>

                    </form>
                    <div>
                        <p className='text-center '>Or Log in with</p>

                        <div className="form-control rounded-lg text-white bg-red-600 mx-8 mt-6 mb-3">
                            <button onClick={handleLoginWithGoogle} className="text-2xl text-center btn btn-ghost btn-active">
                                <div className='flex'>
                                    <div className='text-3xl  pr-5'><FaGoogle /></div>
                                    <div>Google </div>
                                </div>
                            </button>
                        </div>
                        <p className='text-center mb-5'>New to RTR Cloud Kitchen <Link className='text-blue-600 font-bold' to='/signup'>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;