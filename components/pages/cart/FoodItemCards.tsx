import React from 'react';
import { Box, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import Image from 'next/image';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { updateCartInfo, updateCartItemImages, updateCartItems } from '@/store/slices/customerDataSlice';

const FoodItemCards = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((state: RootState) => state.customerSlice.cartItems);
  const cartItemImages = useSelector((state: RootState) => state.customerSlice.cartItemImages);
  const cartInfo = useSelector((state: RootState) => state.customerSlice.cartInfo);

  const editQuantity = (itemId: string, type: string) => {
    const cloneCartItems = {...cartItems};
    if(type === 'decrement' && cartItems[itemId].quantity === 1) {
      delete cloneCartItems[itemId];
      const cloneCartItemImages = {...cartItemImages};
      delete cloneCartItemImages[itemId];
      dispatch(updateCartItemImages(cloneCartItemImages));
      dispatch(updateCartInfo({
        allItemsPrice: cartInfo.allItemsPrice - cartItems[itemId].itemPrice
      }));
    } else if (type === 'decrement') {
      cloneCartItems[itemId] = {...cloneCartItems[itemId], quantity: cloneCartItems[itemId].quantity - 1};
      dispatch(updateCartInfo({
        allItemsPrice: cartInfo.allItemsPrice - cartItems[itemId].itemPrice
      }));
    } else if (type === 'increment') {
      cloneCartItems[itemId] = {...cloneCartItems[itemId], quantity: cloneCartItems[itemId].quantity + 1};
      dispatch(updateCartInfo({
        allItemsPrice: cartInfo.allItemsPrice + cartItems[itemId].itemPrice
      }));
    }
    dispatch(updateCartItems(cloneCartItems));
  };

  return (
    <Box className="flex flex-row flex-wrap">
      {Object.values(cartItems).map((foodItem) => (
        <Card className="shrink basis-48 mr-4 mb-4" key={foodItem.itemId}>
          <CardMedia>
            <Image
              src= {`data:image/png;base64,${cartItemImages[foodItem.itemId]}`}
              alt="food item image"
              width={200}
              height={200}
            />
          </CardMedia>
          <CardContent>
            <Typography>{foodItem.itemName}</Typography>
            <Typography className="text-gray-400 text-sm">
                &#8377; {foodItem.itemPrice}
            </Typography>
          </CardContent>
          <CardActions className='justify-between'>
            <Box className='flex items-center'>
              <IconButton onClick={()=>editQuantity(foodItem.itemId, 'decrement')}>
                <RemoveCircleRoundedIcon />
              </IconButton>
              <Typography>{foodItem.quantity}</Typography>
              <IconButton onClick={()=>editQuantity(foodItem.itemId, 'increment')}>
                <AddCircleRoundedIcon />
              </IconButton>
            </Box>
            <Typography className="text-sm">
                &#8377; {foodItem.itemPrice * foodItem.quantity}
            </Typography>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default FoodItemCards;
