import { NavLink } from 'react-router-dom';

import { Menu, Modal, Input } from 'antd';
import { useRecoilCallback, useRecoilState } from 'recoil';

import { PlusOutlined } from '@ant-design/icons';
import {
  menusState,
  modalVisibleState,
  newItemTitleState,
} from '@finnect/atoms/header/useHeaderMenu';
import { selectedWorkSpaceState } from '@finnect/atoms/sider/useSelectedMenu';
import { WorkSpaceMenuItem } from '@finnect/interface/SlideMenuInterface';

const WorkSpace = () => {
  const [menus, setMenus] = useRecoilState<any[]>(menusState);
  const [modalVisible, setModalVisible] =
    useRecoilState<boolean>(modalVisibleState);
  const [newItemTitle, setNewItemTitle] =
    useRecoilState<string>(newItemTitleState);

  const handleWorkSpaceClick = useRecoilCallback(({ set }) => (e: any) => {
    const selectedItem = e.domEvent.currentTarget.innerText;
    set(selectedWorkSpaceState, selectedItem);
    localStorage.setItem('selectedWorkSpace', selectedItem);
  });

  const handleAddMenuItemClick = () => {
    setModalVisible(true);
  };

  const handleModalOk = () => {
    const newMenuItemKey = `${menus[0].key}_1`;
    const updatedMenus = menus.map((menu) => ({
      ...menu,
      items: [
        ...menu.items,
        {
          key: newMenuItemKey,
          title: newItemTitle,
          link: `/${menu.title}`,
        },
      ],
    }));
    setMenus(updatedMenus);
    setModalVisible(false);
    setNewItemTitle('');
  };

  const handleModalCancel = () => {
    setModalVisible(false);
    setNewItemTitle('');
  };

  return (
    <>
      <Menu theme='light' mode='vertical' style={{ width: '100%' }}>
        {menus.map((menu) => (
          <Menu.SubMenu key={menu.key} title={menu.title}>
            {menu.items.map((item: WorkSpaceMenuItem) => (
              <Menu.Item key={item.key} onClick={handleWorkSpaceClick}>
                <NavLink to={`/${item.title}`}>{item.title}</NavLink>
              </Menu.Item>
            ))}
            <Menu.Item key={`add_${menu.key}`} onClick={handleAddMenuItemClick}>
              <PlusOutlined /> Add WorkSpace
            </Menu.Item>
          </Menu.SubMenu>
        ))}
      </Menu>
      <Modal
        title='새로운 워크스페이스 추가하기'
        visible={modalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
      >
        <Input
          value={newItemTitle}
          onChange={(e) => setNewItemTitle(e.target.value)}
          placeholder='새로운 워크스페이스 이름을 입력해주세요.'
        />
      </Modal>
    </>
  );
};

export default WorkSpace;
