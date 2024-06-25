import Header from './Header';
import Snackbar from './Snackbar';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <Snackbar />
      <main className='px-6 pt-5'>{children}</main>
    </>
  );
};

export default Layout;
