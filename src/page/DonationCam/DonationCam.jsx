import React from 'react';
import UseAxiosOpen from '../../hooks/UseAxiosOpen/UseAxiosOpen';
import { useQuery } from '@tanstack/react-query';

const DonationCam = () => {
  const axiosOpen = UseAxiosOpen();
  const { data: donation = [] } = useQuery({
    queryKey: ['donation'],
    queryFn: async() => {
      const result = await axiosOpen.get('/donations');
      console.log(result.data);
     
      return result.data;
    },
  });
  return (
    <div className="mt-10">
      <h2>total{donation.length}</h2>
    </div>
  );
};
export default DonationCam;
