import { createBrowserRouter } from 'react-router-dom';
import Home from '../page/Home/Home';
import Main from '../layout/Main';
import Login from '../page/Login/Login';

import Signin from '../page/SignIn/SignIn';
import PetList from '../page/PetList/PetList';
import DonationCampaigns from '../page/DonationCampaigns/DonationCampaigns';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/petlist',
        element: <PetList></PetList>,
      },
      {
        path: '/donation-campaign',
        element: <DonationCampaigns></DonationCampaigns>
      },
    ],
  },

  {
    path: '/login',
    element: <Login></Login>,
  },
  {
    path: '/signin',
    element: <Signin></Signin>,
  },
]);

export default router;
