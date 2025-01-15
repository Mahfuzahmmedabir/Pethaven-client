import React, { useEffect, useState } from 'react';
import {
  Navbar,
  Typography,
  Button,
  DialogHeader,
  Dialog,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';

import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth/useAuth';

const Navbars = () => {
  const [size, setSize] = useState(null);
  const handleOpen = value => setSize(value);
  const { user, logOut } = useAuth();
  console.log(user);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Pages
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Account
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Blocks
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Docs
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className="">
      <div className="m-6 ">
        <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
          <div className="flex items-center justify-between text-blue-gray-900">
            <Typography
              as="a"
              href="#"
              className="mr-4 cursor-pointer py-1.5 font-medium"
            >
              Material Tailwind
            </Typography>
            <div className="flex items-center gap-4">
              <div className="mr-4 hidden lg:block">{navList}</div>
              <div className="flex items-center gap-x-1">
                {user ? (
                  <>
                    <button onClick={() => handleOpen('xs')}>
                      <img
                        className="w-10 h-10 rounded-full"
                        src={user?.photoURL}
                        alt=""
                      />
                    </button>

                    <div className="">
                      <Dialog
                        open={size === 'xs'}
                        size={size || 'md'}
                        handler={handleOpen}
                        className=" lg:ml-[1000px] md:ml-[300px] lg:-mt-32 md:-mt-20"
                      >
                        <DialogHeader className="text-center flex justify-center flex-col text-[18px] ">
                          {user?.email}
                          <img
                            className="w-20 h-20 rounded-full"
                            src={user?.photoURL}
                            alt=""
                          />
                          <h2 className="text-[19px] font-normal">
                            Hi {user?.displayName}!
                          </h2>
                        </DialogHeader>
                        <DialogBody>
                          <div className="flex flex-col justify-center items-center">
                            <Link>home </Link>
                            <Link>home </Link>
                            <Link>home </Link>
                            <Link>home </Link>
                            <Link>home </Link>
                            <Link>home </Link>
                          </div>

                          <button className="w-full" onClick={logOut}>
                            Log Out
                          </button>
                        </DialogBody>
                      </Dialog>
                    </div>
                  </>
                ) : (
                  <>
                    <Button
                      variant="text"
                      size="sm"
                      className="hidden lg:inline-block"
                    >
                      <Link to={'/login'}>Log In</Link>
                    </Button>
                    <Button
                      variant="gradient"
                      size="sm"
                      className="hidden lg:inline-block"
                    >
                      <Link to={'/signin'}>Sign in</Link>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </Navbar>

        <div className="mx-auto max-w-screen-md py-12"></div>
      </div>
    </div>
  );
};

export default Navbars;
