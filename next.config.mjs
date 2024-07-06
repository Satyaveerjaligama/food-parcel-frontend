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
    UPDATE_ACCOUNT_DETAILS: process.env.UPDATE_ACCOUNT_DETAILS,
    UPDATE_ORDER_INFO: process.env.UPDATE_ORDER_INFO,
    ALL_ORDERS: process.env.ALL_ORDERS,
    ACTIVE_ORDERS: process.env.ACTIVE_ORDERS,
    CREATE_ORDER: process.env.CREATE_ORDER,
    ORDERS_INFO: process.env.ORDERS_INFO,
    EARNINGS: process.env.EARNINGS,
  },
  basePath: '/food-parcel'
};

export default nextConfig;
