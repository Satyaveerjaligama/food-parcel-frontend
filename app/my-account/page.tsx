/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import Button from '@/components/Button';
import Layout from '@/components/Layout';
import { Avatar, Badge, Card, CardActionArea, Grid, Typography } from '@mui/material';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { useRouter } from 'next/navigation';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { fileUpload } from '@/thunks/fileUploadThunk';
import Image from 'next/image';
import { updateIdForFileUpload } from '@/store/slices/utilitySlice';
import deleteApi from '@/thunks/deleteThunk';
import routes from '@/utilities/routes';

const MyAccount = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const fileRef: any = useRef(null);
  const [filePreview, setFilePreview] = useState<any>(null);
  const [, setFile] = useState(null);
  const userType: string = useSelector((state: RootState) => state.centralDataSlice.userType);
  const userId: string = useSelector((state: RootState) => state.centralDataSlice.userDetails.userId);

  const handleChange = (event: any) => {
    if(event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setFile(file);
      const fileData = event.target.files[0];
      const form = new FormData();
      
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFilePreview(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        setFilePreview(null);
      }
      
      form.append('file', fileData);
      form.append('type', userType);
      dispatch(updateIdForFileUpload(userId));
      dispatch(fileUpload(form));
    }
  };

  const handleButtonClick = () => {
    fileRef.current.click();
  };

  const logoutBtnClick = () => {
    router.push(`/${routes.login}`);
  };

  const deleteAccount = () => {
    dispatch(deleteApi({type: userType, id: userId, router }));
  };

  const navigate = (route: string) => {
    router.push(`${routes.myAccount}/${route}`);
  };

  return (
    <Layout>
      <Grid container columnSpacing={2} rowSpacing={2} className='my-5 w-2/4 mx-auto'>
        <Grid item xs={12} className='flex justify-center'>
          <Badge
            overlap='circular'
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            className='cursor-pointer'
            badgeContent={
              <>
                <EditRoundedIcon className='bg-gray-700 rounded-3xl text-white p-0.5' fontSize='small' onClick={handleButtonClick} />
                <input type="file" ref={fileRef} style={{ display: 'none'}} onChange={handleChange} />
              </>
            }
          >
            <Avatar sx={{ width: 56, height: 56 }} className='bg-gray-400'>
              { filePreview ? 
                <Image src={filePreview} alt='user pic' height={100} width={100}/>
                :
                <PersonRoundedIcon />  
              }
            </Avatar>
          </Badge>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card className='p-4'>
            <Typography>
                Orders
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardActionArea onClick={()=>navigate(routes.changePassword)}>
              <Typography className='p-4'>
                Change password
              </Typography>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardActionArea onClick={()=>navigate(routes.updateAccountDetails)}>
              <Typography className='p-4'>
                Update account details
              </Typography>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}></Grid>
        <Grid item xs={12} md={6}>
          <Button
            startIcon={<DeleteRoundedIcon />}
            label='Delete Account'
            variant='contained'
            fullWidth
            color='error'
            onClick={deleteAccount}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            startIcon={<LogoutRoundedIcon />}
            label='Logout'
            variant='outlined'
            fullWidth
            onClick={logoutBtnClick}
          />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default MyAccount;