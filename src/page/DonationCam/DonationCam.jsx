import React from 'react';
import UseAxiosOpen from '../../hooks/UseAxiosOpen/UseAxiosOpen';
import { useQuery } from '@tanstack/react-query';
import CampaignsCard from './CampaignsCard';
import { Helmet } from 'react-helmet-async';

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
      <Helmet>
        <title>Pet-Haven || Donation campaigns</title>
      </Helmet>
      <h2>total{donation.length}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {donation.map(item => (
          <CampaignsCard campaigns={item} key={item._id}></CampaignsCard>
        ))}
      </div>
    </div>
  );
};
export default DonationCam;
