import { Layout, theme } from 'antd';

import DealAgGrid from './components/DealAgGrid';

const { Content } = Layout;

const DealsBox = () => {
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
      <DealAgGrid />
    </Content>
  );
};

export default DealsBox;
