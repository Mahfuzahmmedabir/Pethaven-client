import React from 'react';
import usePets from '../../hooks/usePets/usePets';
import CategoryCard from '../Home/Category/CategoryCard/CategoryCard';

const PetList = () => {
  const  [pets] = usePets()
  
  return (
    <div>
      <CategoryCard item={pets}></CategoryCard>
    </div>
  );
};

export default PetList;