import { createBrowserRouter } from 'react-router-dom';
import Home from '../page/Home/Home/Home';
import Main from '../layout/Main';
import Login from '../page/Login/Login';

import Signin from '../page/SignIn/SignIn';
import PetList from '../page/PetList/PetList';
import DonationCampaigns from '../page/DonationCampaigns/DonationCampaigns';
import Dashboard from '../layout/Dashboard/Dashboard';
import AddPet from '../page/Dashboard/UserDashboard/AddPet/AddPet';

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
        element: <DonationCampaigns></DonationCampaigns>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/signin',
        element: <Signin></Signin>,
      },
    ],
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'Add-pet',
        element: <AddPet></AddPet>,
      },
    ],
  },
]);

export default router;
