import { Typography, Space, Dropdown, Menu } from 'antd';
import { useRecoilState } from 'recoil';

import {
  EllipsisOutlined,
  LogoutOutlined,
  UserAddOutlined,
} from '@ant-design/icons';
import {
  selectedHeaderMenuState,
  selectedInviteModalState,
} from '@finnect/atoms/header/useHeaderMenu';
import InviteModal from '@finnect/components/common/modal/header/InviteModal';

const { Text } = Typography;

const HeaderSubMenu = () => {
  const [visible, setVisible] = useRecoilState(selectedHeaderMenuState);
  const [inviteModalVisible, setInviteModalVisible] = useRecoilState(
    selectedInviteModalState
  );

  const handleMenuClick = (e: any) => {
    if (e.key === 'logout') {
      // 로그아웃 처리
      console.log('로그아웃');
    } else if (e.key === 'invite') {
      setInviteModalVisible(true);
    }
    setVisible(false);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key='logout' icon={<LogoutOutlined />}>
        로그아웃
      </Menu.Item>
      <Menu.Item key='invite' icon={<UserAddOutlined />}>
        초대하기
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Dropdown
        overlay={menu}
        trigger={['click']}
        visible={visible}
        onVisibleChange={(flag) => setVisible(flag)}
      >
        <Space size='middle'>
          <Text style={{ fontFamily: 'inherit', color: '#606060' }}>
            본인이름
          </Text>
          <EllipsisOutlined
            style={{ fontSize: '20px', color: '#606060', cursor: 'pointer' }}
          />
        </Space>
      </Dropdown>
      <InviteModal
        visible={inviteModalVisible}
        onClose={() => setInviteModalVisible(false)}
      />
    </>
  );
};

export default HeaderSubMenu;
