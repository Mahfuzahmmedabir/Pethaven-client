import React from 'react';
import {
  FaBars,
  FaEmpire,
  FaEnvelope,
  FaHome,
  FaList,
  FaShoppingCart,
  FaUserTag,
  FaUtensils,
} from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useAuth from '../../hooks/useAuth/useAuth';
const Dashboard = () => {
  const { user } = useAuth();
  const isAdmin = true;
  return (
    <div className="">
      <div className="flex">
        {/* links */}
        <div className="w-80 min-h-screen shadow-2xl">
          <div className="py-4 text-center bg-blue-gray-600 font-semibold text-2xl text-white">
            Dashbord
          </div>
          <ul className="menu px-4 leading-10 mt-5">
            {!isAdmin ? (
              <>
                {/* admin */}
                <div>
                  <div className="divider border-b-4"></div>
                  <h2 className="text-3xl ">Admin</h2>
                  <li className="flex">
                    <NavLink
                      className="flex gap-2 items-center"
                      to={'/dashboard/all-user'}
                    >
                      <FaHome className="text-xl"></FaHome>
                      All User
                    </NavLink>
                  </li>
                  <li className="flex">
                    <NavLink
                      className="flex gap-2 items-center"
                      to={'/dashboard/all-pets'}
                    >
                      {/* userDashboard */}
                      <FaHome className="text-xl"></FaHome>
                      All Pets
                    </NavLink>
                  </li>
                  <li className="flex">
                    <NavLink
                      className="flex gap-2 items-center"
                      to={'/dashboard/all-donations'}
                    >
                      <FaHome className="text-xl"></FaHome>
                      All Donations
                    </NavLink>
                  </li>
                </div>

                {/* <div>
                  <li className="flex">
                    <NavLink
                      className="flex gap-2 items-center"
                      to={'/dashboard/add-pet'}
                    >
                      <FaHome className="text-xl"></FaHome>
                      Add pet
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="flex gap-2 items-center"
                      to={'/dashboard/my-added-pets'}
                    >
                      <FaUtensils FaUtensils className="text-xl"></FaUtensils>
                      My added pets
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="flex gap-2 items-center"
                      to={'/dashboard/adoption-request'}
                    >
                      <FaList className="text-xl"></FaList>
                      Adoption Request
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="flex gap-2 items-center"
                      to={'/dashboard/create-donation-campaing'}
                    >
                      <FaUserTag className="text-xl"></FaUserTag>
                      Create Donation Campaign
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="flex gap-2 items-center"
                      to={'/dashboard/my-donation-campaigns'}
                    >
                      <FaUserTag className="text-xl"></FaUserTag>
                      My Donation Campaigns
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="flex gap-2 items-center"
                      to={'/dashboard/my-donations'}
                    >
                      <FaUserTag className="text-xl"></FaUserTag>
                      My Donations
                    </NavLink>
                  </li>
                </div> */}
              </>
            ) : (
              <>
                <div>
                  <li className="flex">
                    <NavLink
                      className="flex gap-2 items-center"
                      to={'/dashboard/add-pet'}
                    >
                      <FaHome className="text-xl"></FaHome>
                      Add pet
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="flex gap-2 items-center"
                      to={'/dashboard/my-added-pets'}
                    >
                      <FaUtensils FaUtensils className="text-xl"></FaUtensils>
                      My added pets
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="flex gap-2 items-center"
                      to={'/dashboard/adoption-request'}
                    >
                      <FaList className="text-xl"></FaList>
                      Adoption Request
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="flex gap-2 items-center"
                      to={'/dashboard/create-donation-campaing'}
                    >
                      <FaUserTag className="text-xl"></FaUserTag>
                      Create Donation Campaign
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="flex gap-2 items-center"
                      to={'/dashboard/my-donation-campaigns'}
                    >
                      <FaUserTag className="text-xl"></FaUserTag>
                      My Donation Campaigns
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="flex gap-2 items-center"
                      to={'/dashboard/my-donations'}
                    >
                      <FaUserTag className="text-xl"></FaUserTag>
                      My Donations
                    </NavLink>
                  </li>
                </div>
              </>
            )}

            {/* admim Link */}
          </ul>
        </div>
        {/* outlet */}
        <div className="w-full ">
          <div className="flex justify-between shadow-2xl px-10 p-5  ">
            <div>
              <FaBars></FaBars>
            </div>
            <div>
              <img
                className="w-10 h-10 rounded-full"
                src={user?.photoURL}
                alt=""
              />
            </div>
          </div>
          <div className="p-6">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
