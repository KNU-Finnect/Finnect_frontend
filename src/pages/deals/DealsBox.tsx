import styled from 'styled-components';
import DealAgGrid from './components/DealAgGrid';
import { Button, Layout, theme } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

const { Content } = Layout;

const DealsBox = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const buttonStyle = {
    background: '#06BA81',
    borderColor: '#06BA81',
    color: '#FFFFFF',
    marginRight: '12px',
  };
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
      <DealHeader>
        <Button type='primary' icon={<SettingOutlined />} style={buttonStyle}>
          View Setting
        </Button>
      </DealHeader>
      <DealBody>
        <DealAgGrid />
      </DealBody>
    </Content>
  );
};

export default DealsBox;

const DealHeader = styled.div``;

const DealBody = styled.div``;
