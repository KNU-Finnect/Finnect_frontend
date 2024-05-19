import { useState } from 'react';

import { Menu, Modal, Input } from 'antd';
import { useRecoilCallback } from 'recoil';

import { PlusOutlined } from '@ant-design/icons';
import { selectedWorkSpaceState } from '@finnect/atoms/sider/useSelectedMenu';
import { WorkSpaceMenuItem } from '@finnect/interface/SlideMenuInterface';

const WorkSpace = () => {
  const [menus, setMenus] = useState<any[]>([
    {
      key: 'WorkSpace',
      title: 'WorkSpace',
      items: [],
    },
  ]);

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [newItemTitle, setNewItemTitle] = useState<string>('');

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
          link: `/${menu.key}/option${menu.items.length + 1}`,
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
                <>{item.title}</>
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
