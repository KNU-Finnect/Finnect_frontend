import { Layout } from 'antd';
import styled from 'styled-components';

import HeaderPath from './HeaderPath';
import HeaderSubMenu from './HeaderSubMenu';

const { Header: AntHeader } = Layout;

const Header = styled(AntHeader)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 21px 16px 15px;
  background: ${(props) => props.theme.token.colorBgContainer};
`;

const HeaderBox = () => {
  return (
    <Header>
      <HeaderPath />
      <HeaderSubMenu />
    </Header>
  );
};

export default HeaderBox;
