import { Menu } from 'antd';

import { SettingOutlined } from '@ant-design/icons';

const Records = () => {
  return (
    <Menu.SubMenu
      key='records'
      title='Records'
      icon={<SettingOutlined />}
      style={{ marginLeft: 10 }}
    >
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
  );
};

export default Records;
