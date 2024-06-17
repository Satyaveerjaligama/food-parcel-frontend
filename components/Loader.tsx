import { RootState } from '@/store/store';
import { CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';

const Loader = () => {
  const loader = useSelector((state: RootState)=> state.utilitySlice.loader);
  return loader ? <CircularProgress /> : null;
};

export default Loader;
