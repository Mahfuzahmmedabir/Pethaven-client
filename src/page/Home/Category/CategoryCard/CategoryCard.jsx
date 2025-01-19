import React from 'react';
import Card from './Card';

const CategoryCard = ({ item }) => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {item.map(card => (
        <Card item={card} key={card._id}></Card>
      ))}
    </div>
  );
};

export default CategoryCard;
