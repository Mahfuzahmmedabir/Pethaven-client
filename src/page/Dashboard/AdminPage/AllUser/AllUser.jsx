import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxionProtected from '../../../../hooks/useAxiosProtected/useAxionProtected';


const AllUser = () => {
  const axionProtected = useAxionProtected()
  const { data: user = [], refetch } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const result = await axionProtected.get('/user');
      console.log(result.data);
      
      return result.data
      
    }
  })
  console.log(user)
  return <div>Alluser{user.length}</div>;
};

export default AllUser;