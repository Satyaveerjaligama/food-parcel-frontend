import { RootState } from '@/store/store';
import { CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import Backdrop from '@mui/material/Backdrop';

const Loader = () => {
  const loader = useSelector((state: RootState)=> state.utilitySlice.loader);
  return (
    <div>
      <Backdrop open={loader} sx={{color: '#0000001a', zIndex: 1500}}>
        <CircularProgress />
      </Backdrop>
    </div>
  );
};

export default Loader;
