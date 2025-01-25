import React from 'react';
import useAxiosProtected from '../../../../hooks/useAxiosProtected/useAxionProtected';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../../hooks/useAuth/useAuth';

const MyDonationCampaigns = () => {
    const axiosProtected = useAxiosProtected();
    const { user } = useAuth();
    const { data: myDonation = [] } = useQuery({
      queryKey: ['donation'],
      queryFn: async () => {
        const res = await axiosProtected.get(
          `/donationes?email=${user?.email}`
        );
        console.log(res.data);
        return res.data;
      },
    });
  return <div >My {myDonation.length}
  
  
  
  
    
    
  </div>;
};

export default MyDonationCampaigns;
