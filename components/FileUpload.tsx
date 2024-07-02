/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, IconButton } from '@mui/material';
import Modal from './Modal';
import UploadIcon from '@mui/icons-material/Upload';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { fileUpload } from '@/thunks/fileUploadThunk';
import { setModal } from '@/store/slices/utilitySlice';
import { PROMISE_STATUS } from '@/utilities/constants';

interface FileUploadProps {
    fileType: string;
    title?: string;
}

const FileUpload = (props: FileUploadProps) => {
  const {fileType, title} = props;
  const dispatch = useDispatch<AppDispatch>();
  const fileRef: any = useRef(null);

  const handleChange = async(event: any) => {
    if(event.target.files && event.target.files.length > 0) {
      const fileData = event.target.files[0];
      const form = new FormData();
      form.append('file', fileData);
      form.append('type', fileType);
      const result = await dispatch(fileUpload(form));
      if(result.meta.requestStatus === PROMISE_STATUS.fulfilled) {
        dispatch(setModal({
          open: false,
          type: ''
        }));
      }
    }
  };

  const handleButtonClick = () => {
    fileRef.current.click();
  };

  return (
    <Modal title={title ?? 'File upload'} hideCloseButton>
      <Box className='flex justify-center'>
        <IconButton>
          <UploadIcon className='text-6xl' onClick={handleButtonClick} />
          <input type="file" ref={fileRef} style={{ display: 'none'}} onChange={handleChange} />
        </IconButton>
      </Box>
    </Modal>
  );
};

export default FileUpload;