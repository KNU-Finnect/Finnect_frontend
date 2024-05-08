import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorPage from './pages/ErrorPage';
import RootPage from './pages/RootPage';
import WorkSpacePage from '@finnect/pages/workspace/WorkSpacePage';
import { GlobalStyle } from '@finnect/styles/GlobalStyle';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    id: 'root',
    errorElement: <ErrorPage />,
    children: [{ path: '/:workspaceId', element: <WorkSpacePage /> }],
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
