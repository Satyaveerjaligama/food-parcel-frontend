/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from '@/components/Button';
import Dropdown from '@/components/Dropdown';
import Modal from '@/components/Modal';
import RadioGroup from '@/components/RadioGroup';
import TextField from '@/components/TextField';
import { CUISINE_TYPES, MENU_ITEM_CATEGORIES, MenuItem, RADIO_GRP_YES_NO } from '@/utilities/constants';
import { Box } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { updateMenuItem } from '@/store/slices/restaurantDataSlice';
import { addMenuItem } from '@/thunks/AddMenuItem';
import { setModal } from '@/store/slices/utilitySlice';
import { restaurantDataInitialState } from '@/store/slices/restaurantDataSlice';

const AddMenuItem = () => {
  const dispatch = useDispatch<AppDispatch>();
  const menuItem: MenuItem = useSelector((state: RootState) => state.restaurantSlice.menuItem);

  const handleChange = (event: any, fieldType: string, key: keyof MenuItem) => {
    switch(fieldType) {
    case 'textfield':
    case 'dropdown':
      dispatch(updateMenuItem({...menuItem, [key]: event?.target.value}));
      break;
    case 'radioBtn':
      dispatch(updateMenuItem({...menuItem, [key]: !menuItem[key]}));
      break;
    }
  };

  const addBtnClick = async() => {
    await dispatch(addMenuItem());
    dispatch(setModal(false));
    dispatch(updateMenuItem(restaurantDataInitialState.menuItem));
  };

  return (
    <Modal title="Add Menu Item" fullWidth maxWidth={'xs'} contentClassName='pb-0'>
      <TextField 
        type='text'
        label='Item Name'
        className='mt-2'
        fullWidth
        value={menuItem.name}
        onChange={(event)=>handleChange(event, 'textfield', 'name')}
      />
      <TextField 
        type='number'
        label='Price'
        className='mt-4'
        fullWidth
        value={menuItem.price}
        onChange={(event)=>handleChange(event, 'textfield', 'price')}
      />
      <TextField 
        type='text'
        label='Main ingredients'
        className='mt-4'
        fullWidth
        value={menuItem.mainIngredients}
        onChange={(event)=>handleChange(event, 'textfield', 'mainIngredients')}
      />
      <Dropdown
        label='Cuisine Type'
        className='mt-4'
        fullWidth
        dropdownOptions={CUISINE_TYPES}
        value={menuItem.type}
        onChange={(event)=>handleChange(event, 'dropdown', 'type')}
      />
      <Dropdown
        label='Item Category'
        className='mt-4'
        fullWidth
        dropdownOptions={MENU_ITEM_CATEGORIES}
        value={menuItem.category}
        onChange={(event)=>handleChange(event, 'dropdown', 'category')}
      />
      <RadioGroup 
        className='mt-4 block'
        label='Is item Veg?'
        radioBtnsList={RADIO_GRP_YES_NO}
        value={menuItem.isVeg}
        onChange={(event)=>handleChange(event, 'radioBtn', 'isVeg')}
      />
      <RadioGroup 
        className='mt-4 block'
        label='Is item Available?'
        radioBtnsList={RADIO_GRP_YES_NO}
        value={menuItem.isAvailable}
        onChange={(event)=>handleChange(event, 'radioBtn', 'isAvailable')}
      />
      <Box className='sticky bottom-0 pb-5 bg-white'>
        <Button 
          label='Add'
          startIcon={<AddRoundedIcon />}
          variant='contained'
          fullWidth
          className='mt-4'
          onClick={addBtnClick}
        />
      </Box>
    </Modal>
  );
};

export default AddMenuItem;