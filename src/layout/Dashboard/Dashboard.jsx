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
const Dashboard = () => {
  return (
    <div className="">
      <div className="flex">
        {/* links */}
        <div className="w-80 min-h-screen shadow-2xl">
          <div className="py-4 text-center bg-blue-gray-600 font-semibold text-2xl text-white">
            Dashbord
          </div>
          <ul className="menu px-4 leading-10 mt-5">
            <>
              <li className="flex">
                <NavLink
                  className="flex gap-2 items-center"
                  to={'/dashbord/adminHome'}
                >
                  <FaHome className="text-xl"></FaHome>
                  Add pet
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex gap-2 items-center"
                  to={'/dashbord/addItems'}
                >
                  <FaUtensils FaUtensils className="text-xl"></FaUtensils>
                  My added pets
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex gap-2 items-center"
                  to={'/dashbord/manageitems'}
                >
                  <FaList className="text-xl"></FaList>
                  Adoption Request
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex gap-2 items-center"
                  to={'/dashbord/allUser'}
                >
                  <FaUserTag className="text-xl"></FaUserTag>
                  Create Donation Campaign
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex gap-2 items-center"
                  to={'/dashbord/allUser'}
                >
                  <FaUserTag className="text-xl"></FaUserTag>
                  My Donation Campaigns
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex gap-2 items-center"
                  to={'/dashbord/allUser'}
                >
                  <FaUserTag className="text-xl"></FaUserTag>
                  My Donations
                </NavLink>
              </li>
              <div className="divider border-b-4"></div>
              <li>
                <NavLink to={'/dashbord/Home'}>
                  <FaHome className="text-xl"></FaHome>
                  Home
                </NavLink>
              </li>{' '}
              <li>
                <NavLink to={'/'}>
                  <FaEmpire className="text-xl"> </FaEmpire>
                  Menu
                </NavLink>
              </li>{' '}
              <li>
                <NavLink to={'/'}>
                  <FaEnvelope className="text-xl"></FaEnvelope>
                  Contart
                </NavLink>
              </li>
            </>
            <>
              <li>
                <NavLink to={'/dashbord/Home'}>
                  <FaShoppingCart className="text-xl"></FaShoppingCart>
                  Home
                </NavLink>
              </li>{' '}
              <li>
                <NavLink to={'/'}>
                  <FaEmpire className="text-xl"> </FaEmpire>
                  Menu
                </NavLink>
              </li>{' '}
              <li>
                <NavLink to={'/'}>
                  <FaEnvelope className="text-xl"></FaEnvelope>
                  Contart
                </NavLink>
              </li>
            </>
          </ul>
        </div>
        {/* outlet */}
        <div className="w-full ">
          <div className="flex justify-between shadow-2xl px-10 p-5  ">
            <div>
              <FaBars></FaBars>
            </div>
            <h2>Profile</h2>
          </div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
