/* eslint-disable @typescript-eslint/no-explicit-any */
import { setModal } from '@/store/slices/utilitySlice';
import { RootState } from '@/store/store';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

const Modal = (props: any) => {
  const {children, title, fullWidth, maxWidth} = props;
  const dispatch = useDispatch();
  const modal = useSelector((state: RootState) => state.utilitySlice.modal);

  const handleClose = () => {
    dispatch(setModal(false));
  };

  return (
    <Dialog
      open={modal}
      onClose={handleClose}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
    >
      <DialogTitle>
        {title}
      </DialogTitle>
      <DialogContent>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;