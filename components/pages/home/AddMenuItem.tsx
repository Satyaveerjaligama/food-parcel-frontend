/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from '@/components/Button';
import Dropdown from '@/components/Dropdown';
import Modal from '@/components/Modal';
import RadioGroup from '@/components/RadioGroup';
import TextField from '@/components/TextField';
import { CUISINE_TYPES, MENU_ITEM_ACTION_TYPES, MENU_ITEM_CATEGORIES, MenuItem, RADIO_GRP_YES_NO } from '@/utilities/constants';
import { Box } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { updateMenuItem } from '@/store/slices/restaurantDataSlice';
import addMenuItemSchema from '@/utilities/validations/addMenuItemSchema';
import { addMenuItem } from '@/thunks/addMenuItemThunk';
import { setModal } from '@/store/slices/utilitySlice';
import { restaurantDataInitialState } from '@/store/slices/restaurantDataSlice';
import React, { useState } from 'react';

interface Errors {
  name: string;
  price: string;
  isVeg: string;
  isAvailable: string;
  type: string;
  category: string;
  mainIngredients: string;
}

const errorInitialState: Errors = {
  name: '',
  price: '',
  isVeg: '',
  isAvailable: '',
  type: '',
  category: '',
  mainIngredients: '',
};

const AddMenuItem = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [errors, setErrors] = useState<Errors>(errorInitialState);
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

  const hitMenuItemApi = async(type: string) => {
    setErrors(errorInitialState);
    await dispatch(addMenuItem(type));
    dispatch(setModal(false));
    dispatch(updateMenuItem(restaurantDataInitialState.menuItem));
  };

  const handleBtnClick = async(type: string) => {
    const isMenuItemDetailsValid = await addMenuItemSchema.isValid(menuItem);
    if(isMenuItemDetailsValid) {
      hitMenuItemApi(type);
    } else {
      try {
        await addMenuItemSchema.validate(menuItem, {abortEarly: false});
      } catch(err: any) {
        const formattedErrors: Errors = {...errorInitialState};
        err.inner.forEach((error: any) => {
          formattedErrors[error.path as keyof Errors] = error.message;
        });
        setErrors(formattedErrors);
      }
    }
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
        helperText={errors.name}
        error={Boolean(errors.name)}
      />
      <TextField 
        type='number'
        label='Price'
        className='mt-4'
        fullWidth
        value={menuItem.price}
        onChange={(event)=>handleChange(event, 'textfield', 'price')}
        helperText={errors.price}
        error={Boolean(errors.price)}
      />
      <TextField 
        type='text'
        label='Main ingredients'
        className='mt-4'
        fullWidth
        value={menuItem.mainIngredients}
        onChange={(event)=>handleChange(event, 'textfield', 'mainIngredients')}
        helperText={errors.mainIngredients}
        error={Boolean(errors.mainIngredients)}
      />
      <Dropdown
        label='Cuisine Type'
        className='mt-4'
        fullWidth
        dropdownOptions={CUISINE_TYPES}
        value={menuItem.type}
        onChange={(event)=>handleChange(event, 'dropdown', 'type')}
        helperText={errors.type}
        error={Boolean(errors.type)}
      />
      <Dropdown
        label='Item Category'
        className='mt-4'
        fullWidth
        dropdownOptions={MENU_ITEM_CATEGORIES}
        value={menuItem.category}
        onChange={(event)=>handleChange(event, 'dropdown', 'category')}
        helperText={errors.category}
        error={Boolean(errors.category)}
      />
      <RadioGroup 
        className='mt-4 block'
        label='Is item Veg?'
        radioBtnsList={RADIO_GRP_YES_NO}
        value={menuItem.isVeg}
        onChange={(event)=>handleChange(event, 'radioBtn', 'isVeg')}
        helperText={errors.isVeg}
        error={Boolean(errors.isVeg)}
      />
      <RadioGroup 
        className='mt-4 block'
        label='Is item Available?'
        radioBtnsList={RADIO_GRP_YES_NO}
        value={menuItem.isAvailable}
        onChange={(event)=>handleChange(event, 'radioBtn', 'isAvailable')}
        helperText={errors.isAvailable}
        error={Boolean(errors.isAvailable)}
      />
      <Box className='sticky bottom-0 pb-5 bg-white z-50'>
        {menuItem.itemId ? 
          <React.Fragment>
            <Button
              startIcon={<DeleteRoundedIcon />}
              label='Delete'
              variant='outlined'
              fullWidth
              color='error'
              className='mt-2'
              onClick={()=>hitMenuItemApi(MENU_ITEM_ACTION_TYPES.delete)}
            />
            <Button 
              label='Update'
              variant='contained'
              fullWidth
              className='mt-2'
              onClick={()=>handleBtnClick(MENU_ITEM_ACTION_TYPES.update)}
            />
          </React.Fragment>
          :
          <Button 
            label='Add'
            startIcon={<AddRoundedIcon />}
            variant='contained'
            fullWidth
            className='mt-4'
            onClick={()=>handleBtnClick(MENU_ITEM_ACTION_TYPES.add)}
          />
        }
      </Box>
    </Modal>
  );
};

export default AddMenuItem;