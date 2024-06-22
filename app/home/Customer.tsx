import FoodTypes from '@/components/pages/home/FoodTypes';
import RestaurantCards from '@/components/pages/home/RestaurantCards';
import React from 'react';

const Customer = () => {
  return (
    <React.Fragment>
      <FoodTypes />
      <RestaurantCards />
    </React.Fragment>
  );
};

export default Customer;