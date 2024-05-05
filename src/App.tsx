import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorPage from './pages/ErrorPage';
import RootPage from './pages/RootPage';
import WelcomePage from '@finnect/pages/welcome/WelcomePage';
import { GlobalStyle } from '@finnect/styles/GlobalStyle';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    id: 'root',
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <WelcomePage /> }],
  },
]);

const App = () => {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
