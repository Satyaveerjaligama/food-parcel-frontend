import FoodTypes from '@/components/pages/home/FoodTypes';
import RestaurantCards from '@/components/pages/home/HotelCards';
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