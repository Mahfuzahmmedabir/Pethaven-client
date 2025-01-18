import { createBrowserRouter } from 'react-router-dom';
import Home from '../page/Home/Home/Home';
import Main from '../layout/Main';
import Login from '../page/Login/Login';

import Signin from '../page/SignIn/SignIn';
import PetList from '../page/PetList/PetList';
import DonationCampaigns from '../page/Dashboard/UserDashboard/MyDonationCampaigns/MyDonationCampaigns';
import Dashboard from '../layout/Dashboard/Dashboard';
import AddPet from '../page/Dashboard/UserDashboard/AddPet/AddPet';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import MyAddedPets from '../page/Dashboard/UserDashboard/MyAddedPets/MyAddedPets';
import AdoptionRequest from '../page/Dashboard/UserDashboard/AdoptionRequest/AdoptionRequest';
import CreateDonation from '../page/Dashboard/UserDashboard/CreateDonation/CreateDonation';
import MyDonationCampaigns from '../page/Dashboard/UserDashboard/MyDonationCampaigns/MyDonationCampaigns';
import MyDonations from '../page/Dashboard/UserDashboard/MyDonations/MyDonations';
import AllUser from '../page/Dashboard/AdminPage/AllUser/AllUser';
import AllPets from '../page/Dashboard/AdminPage/AllPets/AllPets';
import AllDonations from '../page/Dashboard/AdminPage/AllDonations/AllDonations';

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
    path: '/dashboard',

    element: (
      <ProtectedRoute>
        <Dashboard></Dashboard>
      </ProtectedRoute>
    ),
    children: [
      {
        path: 'add-pet',
        element: (
          <ProtectedRoute>
            <AddPet></AddPet>
          </ProtectedRoute>
        ),
      },
      {
        path: 'my-added-pets',
        element: (
          <ProtectedRoute>
            <MyAddedPets></MyAddedPets>
          </ProtectedRoute>
        ),
      },
      {
        path: 'adoption-request',
        element: (
          <ProtectedRoute>
            <AdoptionRequest></AdoptionRequest>
          </ProtectedRoute>
        ),
      },
      {
        path: 'create-donation-campaing',
        element: (
          <ProtectedRoute>
            <CreateDonation></CreateDonation>
          </ProtectedRoute>
        ),
      },
      {
        path: 'my-donation-campaigns',
        element: (
          <ProtectedRoute>
            <MyDonationCampaigns></MyDonationCampaigns>
          </ProtectedRoute>
        ),
      },
      {
        path: 'my-donations',
        element: (
          <ProtectedRoute>
            <MyDonations></MyDonations>
          </ProtectedRoute>
        ),
      },
      // admin route
      {
        path: 'all-user',
        element: <AllUser></AllUser>,
      },
      {
        path: 'all-pets',
        element: <AllPets></AllPets>,
      },
      {
        path: 'all-donations',
        element: <AllDonations></AllDonations>
      },
    ],
  },
]);

export default router;
