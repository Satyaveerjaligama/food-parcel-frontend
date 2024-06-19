import Header from './Header';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <main className='px-6 pt-5'>{children}</main>
    </>
  );
};

export default Layout;
