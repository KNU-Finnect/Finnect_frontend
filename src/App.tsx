import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import ErrorPage from '@finnect/pages/ErrorPage';
import RootPage from '@finnect/pages/RootPage';
import SigninPage from '@finnect/pages/login/SigninPage';
import SignupPage from '@finnect/pages/login/SignupPage';
import WorkSpacePage from '@finnect/pages/workspace/WorkSpacePage';

import { GlobalStyle } from '@finnect/styles/GlobalStyle';
import Theme from '@finnect/styles/Theme';
import InviteSigninPage from './pages/login/InviteSigninPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    id: 'root',
    errorElement: <ErrorPage />,
    children: [{ path: '/:workspaceId', element: <WorkSpacePage /> }],
  },
  {
    path: '/signin',
    element: <SigninPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/signup',
    element: <SignupPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/signin/:workspaceId/:workspaceName',
    element: <InviteSigninPage />,
    errorElement: <ErrorPage />,
  },
]);

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
