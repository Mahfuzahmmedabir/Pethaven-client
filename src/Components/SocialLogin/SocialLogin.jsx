import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { SiFacebook } from 'react-icons/si';
const SocialLogin = () => {
  return (
    <div className="border-b-2 py-6">
      <div>
        <button className="flex w-full rounded-full    justify-center gap-3 items-center py-3 border ">
          <FcGoogle className="text-2xl"></FcGoogle> Log In with Google
        </button>
      </div>
      <div>
        <button className="flex w-full rounded-full  mt-5 justify-center gap-3 items-center py-3 border ">
          <SiFacebook className="text-2xl text-[#1877f2]"></SiFacebook> Log In
          with Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
