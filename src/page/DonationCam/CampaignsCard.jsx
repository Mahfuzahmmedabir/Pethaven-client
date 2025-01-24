import React from 'react';

const CampaignsCard = ({ campaigns}) => {
 const { date , descriptions,image,lastDate,note,user,_id} = campaigns;

  return (
    <div>
      <img src={image} alt="" />
    </div>
  );
};

export default CampaignsCard;