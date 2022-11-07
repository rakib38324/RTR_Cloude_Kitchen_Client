import { createBrowserRouter} from 'react-router-dom';
import LogIn from '../../AuthorizationPage/LogIn/LogIn';
import Signup from '../../AuthorizationPage/Signup/Signup';
import Main from '../../Layout/Main';
import Home from '../../Pages/Home/Home/Home';


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
      ]
    }
  ]);

export default router;