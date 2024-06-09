import { Layout, theme } from 'antd';

import CompanyAgGrid from '@finnect/pages/companies/components/CompanyAgGrid';

const { Content } = Layout;

const CompaniesBox = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Content
      style={{
        margin: '24px 16px',
        minHeight: 280,
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
      }}
    >
      <CompanyAgGrid />
    </Content>
  );
};

export default CompaniesBox;
