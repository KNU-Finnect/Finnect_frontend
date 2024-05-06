import { Layout } from 'antd';

import Slider from '@finnect/components/common/slider/Slider';
import { StyledSliderWrapper } from '@finnect/styles/Layout';

const ViewPage = () => {
  return (
    <Layout style={{ width: '100%', display: 'flex' }}>
      <StyledSliderWrapper>
        <Slider />
      </StyledSliderWrapper>
      <Layout>dealsPage</Layout>
    </Layout>
  );
};

export default ViewPage;
