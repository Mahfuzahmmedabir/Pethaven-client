import React from 'react';

const Card = ({ item }) => {
 
  const {image} = item
  return (
    <div>
      <img src={image} alt="" />
    </div>
  );
};

export default Card;