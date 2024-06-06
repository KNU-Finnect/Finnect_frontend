import { Menu } from 'antd';
import { useRecoilCallback } from 'recoil';

import { SettingOutlined } from '@ant-design/icons';
import { selectedMenuItemState } from '@finnect/atoms/sider/useSelectedMenu';
import { useNavigate } from 'react-router-dom';

const Records = () => {
  const navigate = useNavigate();

  const handleMenuClick = useRecoilCallback(({ set }) => (e: any) => {
    const selectedItem = e.domEvent.currentTarget.innerText;
    set(selectedMenuItemState, selectedItem);
    localStorage.setItem('selectedMenuItem', selectedItem);

    const selectedSpace = localStorage.getItem('selectedWorkSpace');
    navigate(`/${selectedSpace}`);
  });

  console.log('test');

  return (
    <Menu.SubMenu
      key='records'
      title='Records'
      icon={<SettingOutlined />}
      style={{ marginLeft: 10 }}
    >
      <Menu.Item key='1' onClick={handleMenuClick}>
        <>Companies</>
      </Menu.Item>
      <Menu.Item key='2' onClick={handleMenuClick}>
        <>People</>
      </Menu.Item>
      <Menu.Item key='3' onClick={handleMenuClick}>
        <>Deals</>
      </Menu.Item>
    </Menu.SubMenu>
  );
};

export default Records;
