/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    LOGIN: process.env.LOGIN,
    REGISTER: process.env.REGISTER,
    FETCH_RESTAURANTS: process.env.FETCH_RESTAURANTS,
    FETCH_RESTAURANT_DETAILS: process.env.FETCH_RESTAURANT_DETAILS,
    GET_MENU_ITEMS: process.env.GET_MENU_ITEMS,
    MENU_ITEM: process.env.MENU_ITEM,
    FILE_UPLOAD: process.env.FILE_UPLOAD,
    DELETE: process.env.DELETE,
    CHANGE_PASSWORD: process.env.CHANGE_PASSWORD,
  },
  basePath: '/food-parcel'
};

export default nextConfig;
