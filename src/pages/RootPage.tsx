import { Outlet } from 'react-router-dom';

const RootPage = () => {
  return (
    <>
      <main>
        <Outlet />
        This is RootPage
      </main>
    </>
  );
};

export default RootPage;