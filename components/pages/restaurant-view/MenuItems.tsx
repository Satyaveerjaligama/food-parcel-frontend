import Button from '@/components/Button';
import { AppDispatch, RootState } from '@/store/store';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import { updateCartInfo, updateCartItemImages, updateCartItems } from '@/store/slices/customerDataSlice';
import { MenuItemList } from '@/utilities/constants';
import vegIcon from '@/assets/images/vegIcon.png';
import nonVegIcon from '@/assets/images/nonVegIcon.png';
  
const MenuItems = () => {
  const dispatch = useDispatch<AppDispatch>();
  const menuItemsList = useSelector((state: RootState) => state.restaurantSlice.menuItemsList);
  const cartItems = useSelector((state: RootState) => state.customerSlice.cartItems);
  const cartItemImages = useSelector((state: RootState) => state.customerSlice.cartItemImages);
  const cartInfo = useSelector((state: RootState) => state.customerSlice.cartInfo);

  const addItemHandler = (menuItem: MenuItemList) => {
    dispatch(updateCartItems({...cartItems, [menuItem.itemId]: {
      itemId: menuItem.itemId,
      itemName: menuItem.name,
      quantity: 1,
      itemPrice: menuItem.price
    }}));
    dispatch(updateCartItemImages({...cartItemImages, [menuItem.itemId] : menuItem?.image}));
    if(Object.keys(cartItems).length === 0) {
      dispatch(updateCartInfo({
        restaurantId: menuItem.restaurantId,
        allItemsPrice: menuItem.price,
      }));
    } else {
      dispatch(updateCartInfo({
        allItemsPrice: cartInfo.allItemsPrice + menuItem.price,
      }));
    }
  };

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
    <Grid container columnSpacing={4} rowSpacing={2} className="mb-10">
      {menuItemsList.map((menuItem) => (
        <Grid item xs={12} sm={6} md={4} key={menuItem.itemId}>
          <Card className="flex justify-start items-center">
            <CardMedia className='basis-2/5'>
              <Image
                src={`data:image/png;base64,${menuItem.image}`}
                alt="sample image"
                width={100}
                height={100}
                className='w-full'
              />
            </CardMedia>
            <CardContent className='basis-3/5 relative'>
              <Image className='absolute top-2 right-2' src={menuItem.isVeg ? vegIcon : nonVegIcon} width={15} height={15} alt='veg/non-veg icon'/>
              <Typography>{menuItem.name}</Typography>
              <Typography className="text-gray-400 text-sm">
                &#8377; {menuItem.price}
              </Typography>
              {cartItems?.[menuItem.itemId]?.quantity ? 
                <Box className='flex items-center mt-1'>
                  <IconButton onClick={()=>editQuantity(menuItem.itemId, 'decrement')}>
                    <RemoveCircleRoundedIcon />
                  </IconButton>
                  <Typography>
                    {cartItems?.[menuItem.itemId]?.quantity}
                  </Typography>
                  <IconButton onClick={()=>editQuantity(menuItem.itemId, 'increment')}>
                    <AddCircleRoundedIcon />
                  </IconButton>
                </Box>
                :
                <Button 
                  label='Add'
                  variant='contained'
                  fullWidth
                  className='mt-2'
                  onClick={()=>addItemHandler(menuItem)}
                />
              }
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
  
export default MenuItems;
  