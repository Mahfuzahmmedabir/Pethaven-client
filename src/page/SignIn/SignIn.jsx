import React, { useContext, useState } from 'react';
import useAuth from '../../hooks/useAuth/useAuth';
import { useForm } from 'react-hook-form';
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from '@material-tailwind/react';
  
const Signin = () => {
  const { createNewUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
     const { email, password } = data;
     console.log(email, password);
  } 

 



  return (
    <div className="mt-10 flex justify-between">
      {/* Animation section */}
      <div>sdfsd</div>
      {/* form section */}
      <div>
        <Card color="transparent" className="p-7" shadow={true}>
          <Typography variant="h4" color="blue-gray">
            Sign Up
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Nice to meet you! Enter your details to register.
          </Typography>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 mb-2  w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Name
              </Typography>
              <Input
                {...register('name', { required: true })}
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              />
              {errors.name && <span> sdfsdf</span> }

              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Email
              </Typography>
              <Input
                {...register('email')}
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Password
              </Typography>
              <Input
                {...register('password')}
                type="password"
                size="lg"
                placeholder="********"
                className=" border-t-blue-gray-200 focus:!border-t-gray-900"
              />
            </div>

            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: '-ml-2.5' }}
            />

            <div className="bg-black py-2 rounded-xl text-center">
              <button
                className="  font-bold text-white mx-auto text-center"
                fullWidth
              >
                Sign up
              </button>
            </div>

            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{' '}
              <a href="#" className="font-medium text-gray-900">
                Sign In
              </a>
            </Typography>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Signin;
