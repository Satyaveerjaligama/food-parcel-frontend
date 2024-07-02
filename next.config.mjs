/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    LOGIN: process.env.LOGIN,
    REGISTER: process.env.REGISTER,
    FETCH_RESTAURANTS: process.env.FETCH_RESTAURANTS,
    FETCH_RESTAURANT_DETAILS: process.env.FETCH_RESTAURANT_DETAILS,
    ADD_MENU_ITEM: process.env.ADD_MENU_ITEM,
    UPDATE_MENU_ITEM: process.env.UPDATE_MENU_ITEM,
    GET_MENU_ITEMS: process.env.GET_MENU_ITEMS,
  },
  basePath: '/food-parcel'
};

export default nextConfig;
