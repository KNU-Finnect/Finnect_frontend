import { Menu } from 'antd';

const Records = () => {
  return (
    <Menu theme='light' mode='inline' style={{ width: '100%' }}>
      <Menu.SubMenu key='records' title='Records'>
        <Menu.Item key='1'>
          <>Companies</>
        </Menu.Item>
        <Menu.Item key='2'>
          <>People</>
        </Menu.Item>
        <Menu.Item key='3'>
          <>Deals</>
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
};

export default Records;
