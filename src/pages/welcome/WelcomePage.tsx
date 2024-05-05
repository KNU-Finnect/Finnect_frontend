import { Layout } from 'antd';

import Slider from '@finnect/components/common/Slider';

const { Header, Content } = Layout;

const WelcomePage = () => {
  return (
    <Layout>
      <Slider />
      <Layout>
        <Header></Header>
        <Content></Content>
      </Layout>
    </Layout>
  );
};

export default WelcomePage;
