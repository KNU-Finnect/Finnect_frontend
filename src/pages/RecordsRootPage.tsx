import { Outlet } from 'react-router-dom';

import { Layout } from 'antd';

import Slider from '@finnect/components/common/slider/Slider';
import { StyledSliderWrapper } from '@finnect/styles/Layout';

const RecordsRootPage = () => {
  return (
    <Layout style={{ width: '100%', display: 'flex' }}>
      <StyledSliderWrapper>
        <Slider />
      </StyledSliderWrapper>
      <Layout>
        <Outlet />
      </Layout>
    </Layout>
  );
};

export default RecordsRootPage;
