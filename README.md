# Food Parcel - Frontend
This is the Frontend service of Food Parcel app. This repository have the code related to User interfaces, API integrations, etc

## This application is developed using
- Next JS
- TypeScript
- Material UI
- Tailwind CSS
- Redux Toolkit
- Yup validation (for forms validations)

## Users
1. Customers 
2. Restaurants
3. Delivery Agents

### Application Flow
1. User has to create an Account Creation
![Registration page](assets/readme-file-images/createAccount.png)

2. Once account is created successfully, user can Login by providing email id and password
![Login Page](assets/readme-file-images/login.png)

#### Customer Flow
1. Once customer is logged in, he will be landing on the home page, customer can click on anyone from the available restaurants
![Customer home page](assets/readme-file-images/customerHomePage.png)

2. User can add the food items and update the quantity as per his requirement
![Restaurant page with menu items](assets/readme-file-images/restaurantView.png)

3. In the cart page we can review all the selected items and payment details
![Cart](assets/readme-file-images/cart.png)

4. Once payment is done, user will be redirected to order confirmation page
![Order confirmation](assets/readme-file-images/orderConfirmation.png)

5. Customer can also checkout his my orders page to review all his current and previous order details
![Customer's my orders page](assets/readme-file-images/customerMyOrders.png)

#### Restaurant Flow
1. Once Restaurant user gets logged in, he will be landing on the home page. The first part of the page is to handle the active and incoming orders
![Restaurant home page one](assets/readme-file-images/restaurantHomePageOne.png)

2. Second part of the page is to manage restaurant's menu
![Restaurant home page two](assets/readme-file-images//restaurantHomePageTwo.png)

3. To add new food item in menu
![Add food item in menu](assets/readme-file-images/addMenuItem.png)

4. Update or delete existing menu item details
![Update/delete food item](assets/readme-file-images/updateMenuItem.png)

5. Restaurant's My orders page
![Restaurant's my orders page](assets/readme-file-images/restaurantMyOrders.png)

#### Delivery Agent Flow
1. Once the delivery agent logged in, he can view his earnings, current order and available orders
![Delivery agent home page one](assets/readme-file-images/deliveryAgentHomePageOne.png)

2. If the delivery agent accepts any available order, then that particular order will become his current order
![Delivery agent current order](assets/readme-file-images/deliveryAgentHomePageTwo.png)

3. Agent can update the status of the order
![Current order status update](assets/readme-file-images/deliveryAgentHomePageThree.png)

4. My orders page of agent
![Delivery agent's my orders page](assets/readme-file-images/deliveryAgentMyOrders.png)

#### Additional functionalities
Below functionalities will be available for all the users
1. Delete Account
![Delete account](assets/readme-file-images/myAccount.png)

2. Change Password
![Change Password](assets/readme-file-images/changePassword.png)

3. Update account details
![Update account details](assets/readme-file-images/updateAccountDetails.png)

### Note
Names and images used in this application are stored in the local DB and fetched based on the requirement. The Images are taken from various parts of internet for development purposes only, and all the rights are retailned by the original owners