import Header from './Header';
import Loader from './Loader';
import Snackbar from './Snackbar';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <Loader />
      <Snackbar />
      <main className='px-6 pt-5'>{children}</main>
    </>
  );
};

export default Layout;
