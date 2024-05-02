import { Outlet } from 'react-router-dom';

const Errorpage = () => {
  return (
    <>
      <main>
        <Outlet />
        This is ErrorPage
      </main>
    </>
  );
};

export default Errorpage;