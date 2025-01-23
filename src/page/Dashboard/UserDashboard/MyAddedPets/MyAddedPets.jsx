import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosProtected from '../../../../hooks/useAxiosProtected/useAxionProtected';
import useAuth from '../../../../hooks/useAuth/useAuth';

const MyAddedPets = () => {
  const { user } = useAuth();
  console.log(user.email);
  console.log('aaaaaa');


  const axiosProtected = useAxiosProtected();
  const { data: pets = [] } = useQuery({
    queryKey: ['pets'],
    queryFn: async () => {
      const res = await axiosProtected.get(
        `/pet?email=${user.email}`
      );
      console.log(res.data);
      return res.data;
    },
  });

  return <div>MyAddedPets {pets.length} </div>;
};

export default MyAddedPets;
