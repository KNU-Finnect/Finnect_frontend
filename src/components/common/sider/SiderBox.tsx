import { Layout } from 'antd';
import { Menu } from 'antd';

import Records from './Records';
import Views from './Views';
import WorkSpace from './WorkSpace';

const { Sider } = Layout;

const SiderBox = () => {
  return (
    <Sider
      theme='light'
      style={{
        overflow: 'auto',
        height: '100%',
        position: 'fixed',
        left: 0,
        width: '100%',
      }}
    >
      <WorkSpace />
      <br />
      <br />
      <br />
      <Menu theme='light' mode='inline' style={{ width: '100%' }}>
        <Records />
        <Views />
      </Menu>
    </Sider>
  );
};

export default SiderBox;
