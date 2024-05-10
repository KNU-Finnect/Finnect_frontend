import { Outlet } from 'react-router-dom';

import { Layout } from 'antd';
import styled from 'styled-components';

import SiderBox from '@finnect/components/common/sider/SiderBox';
import { StyledSliderWrapper } from '@finnect/styles/Layout';

const CustomLayout = styled(Layout)`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
`;

const RootPage = () => {
  return (
    <CustomLayout>
      <Layout style={{ width: '100%', display: 'flex' }}>
        <StyledSliderWrapper>
          <SiderBox />
        </StyledSliderWrapper>
        <Layout>
          <Outlet />
        </Layout>
      </Layout>
    </CustomLayout>
  );
};

export default RootPage;
