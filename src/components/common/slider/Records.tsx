import { Link } from 'react-router-dom';

import { Menu } from 'antd';

const Records = () => {
  return (
    <Menu theme='light' mode='inline' style={{ width: '100%' }}>
      <Menu.SubMenu key='records' title='Records'>
        <Menu.Item key='1'>
          <Link to='/records/companies'>Companies</Link>
        </Menu.Item>
        <Menu.Item key='2'>
          <Link to='/records/people'>People</Link>
        </Menu.Item>
        <Menu.Item key='3'>
          <Link to='/records/deals'>Deals</Link>
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
};

export default Records;
