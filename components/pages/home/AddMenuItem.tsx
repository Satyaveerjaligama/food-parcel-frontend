import Dropdown from '@/components/Dropdown';
import Modal from '@/components/Modal';
import RadioGroup from '@/components/RadioGroup';
import TextField from '@/components/TextField';
import { CUISINE_TYPES, MENU_ITEM_CATEGORIES, RADIO_GRP_YES_NO } from '@/utilities/constants';

const AddMenuItem = () => {
  return (
    <Modal title="Add Menu Item" fullWidth maxWidth={'xs'}>
      <TextField 
        type='text'
        label='Item Name'
        className='mt-2'
        fullWidth
      />
      <TextField 
        type='number'
        label='Price'
        className='mt-4'
        fullWidth
      />
      <TextField 
        type='text'
        label='Ingredients'
        className='mt-4'
        fullWidth
      />
      <Dropdown
        label='Cuisine Type'
        value=''
        className='mt-4'
        fullWidth
        dropdownOptions={CUISINE_TYPES}
      />
      <Dropdown
        label='Item Category'
        value=''
        className='mt-4'
        fullWidth
        dropdownOptions={MENU_ITEM_CATEGORIES}
      />
      <RadioGroup 
        className='mt-4 block'
        label='Is item Veg?'
        radioBtnsList={RADIO_GRP_YES_NO}
        value={true}
      />
      <RadioGroup 
        className='mt-4 block'
        label='Is item Available?'
        radioBtnsList={RADIO_GRP_YES_NO}
        value={false}
      />
    </Modal>
  );
};

export default AddMenuItem;