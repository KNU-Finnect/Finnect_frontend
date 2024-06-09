import { Layout, theme } from 'antd';

import PeopleAgGrid from '@finnect/pages/peoples/components/PeopleAgGrid';

const { Content } = Layout;

const PeoplesBox = () => {
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
      <PeopleAgGrid />
    </Content>
  );
};

export default PeoplesBox;
