import { createBrowserRouter } from 'react-router-dom';
import Home from '../page/Home/Home';
import Main from '../layout/Main';
import Login from '../page/Login/Login';

import Signin from '../page/SignIn/SignIn';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
    ],
  },
  
  {
    path: '/login',
    element: <Login></Login>,
  },
  {
    path: '/signin',
    element: <Signin></Signin>
  }
 
]);

export default router;
