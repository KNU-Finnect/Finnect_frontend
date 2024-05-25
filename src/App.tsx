import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import ErrorPage from './pages/ErrorPage';
import RootPage from './pages/RootPage';
import SigninPage from '@finnect/pages/login/SigninPage';
import SignupPage from '@finnect/pages/login/SignupPage';
import WorkSpacePage from '@finnect/pages/workspace/WorkSpacePage';
import { GlobalStyle } from '@finnect/styles/GlobalStyle';
import Theme from '@finnect/styles/Theme';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    id: 'root',
    errorElement: <ErrorPage />,
    children: [
      { path: 'signup', element: <SignupPage /> },
      { path: '/:workspaceId', element: <WorkSpacePage /> }
    ],
  },
  {
    path: 'signin',
    element: <SigninPage />,
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
