import { Layout } from 'antd';

import HeaderBox from '@finnect/components/common/header/HeaderBox';

const { Content } = Layout;

const WorkSpacePage = () => {
  return (
    <Layout>
      <HeaderBox />
      <Content></Content>
    </Layout>
  );
};

export default WorkSpacePage;
