import { Layout } from 'antd';

import HeaderBox from '@finnect/components/common/header/HeaderBox';
import CompaniesBox from '@finnect/pages/companies/CompaniesBox';

const WorkSpacePage = () => {
  return (
    <Layout>
      <HeaderBox />
      <CompaniesBox />
    </Layout>
  );
};

export default WorkSpacePage;
