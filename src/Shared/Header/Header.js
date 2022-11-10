import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthContextProvider';
import toast from 'react-hot-toast';
import { FaRegUserCircle } from 'react-icons/fa';

const Header = () => {


    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const { user,logOut } = useContext(AuthContext)

    const handleLogOut = () =>{
        logOut()
        .then(re => {
            navigate(from, { replace: true });
            toast.success("Logout Successfully");
        })
        .catch()
    }

   
    const menuItems = <>
    
    <li className='font-semibold'><Link to='/'>Home</Link></li>
    <li className='font-semibold'><Link to='/addservices'>Add Service</Link></li>
    <li className='font-semibold'><Link to='/blogs'>Blogs</Link></li>
        {
            user?.uid?
                <>
                    <li className='font-semibold'><Link to='/myReview'>My Review</Link></li>
                    <li className='font-semibold'>
                        <button onClick={handleLogOut} className='btn-ghost'>Sign Out</button>
                    </li>
                    <li ><Link to='/'> <img className='w-10 mx-auto border-2 border-red-500 rounded-full' src={user.photoURL} alt="" /> </Link></li>
                </>
                :
                <>
                
                <li className='font-semibold'><Link to='/login'>Login</Link></li>
                <li className='font-semibold'><Link to='/signup'>Sign Up</Link></li>
                <li className='text-2xl'><Link to='/signup'><FaRegUserCircle></FaRegUserCircle></Link></li>
                </>

        }

    </>

    return (
        <div className="navbar h-20 bg-base-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                       {menuItems} 
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-2xl font-bold"><span className='text-red-600 font-extrabold'>RTR </span> Cloud Kitchen</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            
        </div>
    );
};

export default Header;