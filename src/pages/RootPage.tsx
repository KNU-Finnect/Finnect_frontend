import { Outlet } from 'react-router-dom';

import { Layout } from 'antd';
import styled from 'styled-components';

const CustomLayout = styled(Layout)`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
`;

const RootPage = () => {
  return (
    <CustomLayout>
      <Layout>
        <Outlet />
      </Layout>
    </CustomLayout>
  );
};

export default RootPage;
