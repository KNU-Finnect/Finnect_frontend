import { Typography, Space, Dropdown, Menu, message } from 'antd';
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
import { logout } from '@finnect/apis/auth/auth.api';
import { useNavigate } from 'react-router-dom';

const { Text } = Typography;

const HeaderSubMenu = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useRecoilState(selectedHeaderMenuState);
  const [inviteModalVisible, setInviteModalVisible] = useRecoilState(
    selectedInviteModalState
  );
  const personalName = localStorage.getItem('personalName');

  const handleMenuClick = (e: any) => {
    if (e.key === 'logout') {
      logout();
      navigate('/signin');
      console.log('로그아웃');
      return message.success('로그아웃 성공.');
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
        open={visible}
        onOpenChange={(flag) => setVisible(flag)}
      >
        <Space size='middle'>
          <Text style={{ fontFamily: 'inherit', color: '#606060' }}>
            {personalName}
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
