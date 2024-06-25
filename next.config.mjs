/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    LOGIN: process.env.LOGIN,
    REGISTER: process.env.REGISTER,
    FETCH_RESTAURANTS: process.env.FETCH_RESTAURANTS,
    FETCH_RESTAURANT_DETAILS: process.env.FETCH_RESTAURANT_DETAILS
  },
  basePath: '/food-parcel'
};

export default nextConfig;
