import { Layout, Button, theme } from 'antd';
import styled from 'styled-components';

import { SaveOutlined, SettingOutlined } from '@ant-design/icons';
import CompanyAgGrid from '@finnect/pages/companies/components/CompanyAgGrid';

const { Content } = Layout;

const ButtonLayout = styled.div`
  display: flex;
  margin-bottom: 24px;
  width: 100%;
  justify-content: space-between;
`;

const CompaniesBox = () => {
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
      <ButtonLayout>
        <div>
          <Button type='primary' icon={<SettingOutlined />} style={buttonStyle}>
            View Setting
          </Button>
        </div>
        <Button type='primary' icon={<SaveOutlined />} style={buttonStyle}>
          Save
        </Button>
      </ButtonLayout>
      <CompanyAgGrid />
    </Content>
  );
};

export default CompaniesBox;
