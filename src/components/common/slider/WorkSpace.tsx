import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Menu, Modal, Input } from 'antd';

import { PlusOutlined } from '@ant-design/icons';
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

  const handleAddMenuItemClick = () => {
    setModalVisible(true);
  };

  const handleModalOk = () => {
    const newMenuItemKey = `${menus[0].key}_1`; // Assuming only one menu is available
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
              <Menu.Item key={item.key}>
                <>{item.title}</>
              </Menu.Item>
            ))}
            <Menu.Item key={`add_${menu.key}`} onClick={handleAddMenuItemClick}>
              <PlusOutlined /> Add Item
            </Menu.Item>
          </Menu.SubMenu>
        ))}
      </Menu>
      <Modal
        title='Add Item'
        visible={modalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
      >
        <Input
          value={newItemTitle}
          onChange={(e) => setNewItemTitle(e.target.value)}
          placeholder='Enter item title'
        />
      </Modal>
    </>
  );
};

export default WorkSpace;
