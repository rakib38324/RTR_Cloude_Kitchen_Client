import { createBrowserRouter} from 'react-router-dom';
import LogIn from '../../AuthorizationPage/LogIn/LogIn';
import Review from '../../AuthorizationPage/Signup/Review';
import Signup from '../../AuthorizationPage/Signup/Signup';
import Main from '../../Layout/Main';
import AddServices from '../../Pages/AddServices/AddServices';
import Home from '../../Pages/Home/Home/Home';
import AllServices from '../../Pages/Home/Services/AllServices/AllServices';
import ServicesDetails from '../../Pages/Home/Services/ServicesDetails/ServicesDetails';



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
            loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
            path:'/services',
            element: <AllServices></AllServices>,
        },
        {
            path: '/addservices',
            element: <AddServices></AddServices>
        },
        {
            path: '/review/:id',
            element: <Review></Review>,
            loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
          },
      ]
    }
  ]);

export default router;