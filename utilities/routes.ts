const routes = {
  login: 'login',
  createAccount: 'create-account',
  home: 'home',
  myAccount: 'my-account',
  updateAccountDetails: 'update-account-details',
  changePassword: 'change-password',
  cart: 'cart',
  orders: 'orders',
  paymentSuccess: 'payment-success',
  restaurantView:(restaurantId: string) => `/customer/restaurant-view/${restaurantId}`,
};

export default routes;