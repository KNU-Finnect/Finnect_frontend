import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorPage from './pages/ErrorPage';
import RootPage from './pages/RootPage';
import RecordsRootPage from '@finnect/pages/RecordsRootPage';
import CompaniesPage from '@finnect/pages/companies/CompaniesPage';
import DealsPage from '@finnect/pages/deals/DealsPage';
import PeoplePage from '@finnect/pages/people/PeoplePage';
import ViewPage from '@finnect/pages/views/ViewPage';
import WorkSpacePage from '@finnect/pages/workspace/WorkSpacePage';
import { GlobalStyle } from '@finnect/styles/GlobalStyle';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    id: 'root',
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <WorkSpacePage /> },
      {
        path: 'records',
        element: <RecordsRootPage />,
        children: [
          {
            index: true,
            path: 'companies',
            element: <CompaniesPage />,
          },
          {
            path: 'people',
            element: <PeoplePage />,
          },
          {
            path: 'deals',
            element: <DealsPage />,
          },
        ],
      },
      {
        path: 'views',
        children: [
          {
            index: true,
            path: ':viewName',
            element: <ViewPage />,
          },
        ],
      },
    ],
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
