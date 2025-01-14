import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Home = () => {
  const { x } = useContext(AuthContext);
  return (
    <div className="">
      <h2>{x}</h2>
    </div>
  );
};

export default Home;
