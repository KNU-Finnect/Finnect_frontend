import { Menu } from 'antd';

import { BookOutlined } from '@ant-design/icons';

const Views = () => {
  return (
    <Menu.SubMenu
      key='views'
      title='Views'
      icon={<BookOutlined />}
      style={{ marginLeft: 10 }}
    >
      <Menu.Item key='4'>
        <>Funding Raise</>
      </Menu.Item>
    </Menu.SubMenu>
  );
};

export default Views;
