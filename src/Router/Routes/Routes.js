import { createBrowserRouter, Link} from 'react-router-dom';
import LogIn from '../../AuthorizationPage/LogIn/LogIn';
import Review from '../../AuthorizationPage/Signup/Review';
import Signup from '../../AuthorizationPage/Signup/Signup';
import Main from '../../Layout/Main';
import AddServices from '../../Pages/AddServices/AddServices';
import Home from '../../Pages/Home/Home/Home';
import AllServices from '../../Pages/Home/Services/AllServices/AllServices';
import ServicesDetails from '../../Pages/Home/Services/ServicesDetails/ServicesDetails';
import EditReview from '../../Pages/TotalReview/EditReview/EditReview';
import MyReview from '../../Pages/TotalReview/MyReview/MyReview';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import page from '../errorPage.jpg'
import Blogs from '../../Pages/Home/Blogs/Blogs';
import { FaArrowLeft } from 'react-icons/fa';



//setup router
const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <LogIn></LogIn>
        },
        {
            path: '/signup',
            element: <Signup></Signup>
        },
        {
            path:'/services/:id',
            element: <ServicesDetails></ServicesDetails>,
            loader: ({params}) => fetch(`https://rtr-cloud-kitchen-server.vercel.app/services/${params.id}`)
        },
        {
            path:'/services',
            element: <AllServices></AllServices>,
        },
        {
            path: '/addservices',
            element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
        },
        {
            path: '/myreview',
            element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
        },
        {
            path: '/review/:id',
            element: <PrivateRoute><Review></Review></PrivateRoute>,
            loader: ({params}) => fetch(`https://rtr-cloud-kitchen-server.vercel.app/services/${params.id}`)
        },
        {
            path: '/editreview/:id',
            element: <PrivateRoute><EditReview></EditReview></PrivateRoute>,
            loader: ({params}) => fetch(`https://rtr-cloud-kitchen-server.vercel.app/review/${params.id}`)
        },
        {
            path: '/blogs',
            element: <Blogs></Blogs>,
            
        }
      ]
      
    },
    {path: '*', element: 
    <div className='max-w-screen-xl mx-auto'>
        <Link to='/'><button className='btn my-10'> <FaArrowLeft></FaArrowLeft><span className='pl-5'> Go Back Home</span></button></Link>
         <img className='w-full' src={page} alt="" />
         
     </div> }
    
  ]);

export default router;