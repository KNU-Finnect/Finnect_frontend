import { Menu } from 'antd';

const Views = () => {
  return (
    <Menu theme='light' mode='inline' style={{ width: '100%' }}>
      <Menu.SubMenu key='views' title='Views'>
        <Menu.Item key='1'>
          <>Funding Raise</>
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
};

export default Views;
