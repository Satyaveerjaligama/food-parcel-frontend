import {
  BottomNavigation,
  BottomNavigationAction,
} from '@mui/material';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import DeliveryDiningRoundedIcon from '@mui/icons-material/DeliveryDiningRounded';
import RestaurantMenuRoundedIcon from '@mui/icons-material/RestaurantMenuRounded';
import { AppDispatch, RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserType } from '@/store/slices/centralDataSlice';
import { USER_TYPES, UserType } from '@/utilities/constants';

const UserNavigation = () => {
  const dispatch = useDispatch<AppDispatch>();
  const userType: UserType = useSelector(
    (state: RootState) => state.centralDataSlice.userType
  );

  return (
    <BottomNavigation
      className="mb-4"
      showLabels
      value={userType}
      onChange={(event, newValue) => {
        dispatch(updateUserType(newValue));
      }}
    >
      <BottomNavigationAction
        value={USER_TYPES.customer}
        label="Customer"
        icon={<PersonRoundedIcon />}
      />
      <BottomNavigationAction
        value={USER_TYPES.restaurant}
        label="Restaurant"
        icon={<RestaurantMenuRoundedIcon />}
      />
      <BottomNavigationAction
        value={USER_TYPES.deliveryAgent}
        label="Delivery Agent"
        icon={<DeliveryDiningRoundedIcon />}
      />
    </BottomNavigation>
  );
};

export default UserNavigation;