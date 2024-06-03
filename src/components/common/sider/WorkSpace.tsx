import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { Menu, Modal, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { useRecoilCallback, useRecoilState } from 'recoil';

import {
  menusState,
  modalVisibleState,
  newItemTitleState,
} from '@finnect/atoms/header/useHeaderMenu';
import {
  selectedWorkSpaceState,
  selectedWorkSpaceIdState,
} from '@finnect/atoms/sider/useSelectedMenu';

import { WorkSpaceMenuItem } from '@finnect/interface/SlideMenuInterface';

import { refreshWorkSpace } from '@finnect/apis/auth/refresh.api';
import { useGetWorkSpaceQuery } from '@finnect/hooks/queries/workspace/useGetWorkSpaceQuery';
import { usePostWorkSpaceQuery } from '@finnect/hooks/queries/workspace/usePostWorkSpaceQuery';

const WorkSpace = () => {
  const { data, isPending, isError, error, refetch } = useGetWorkSpaceQuery();
  const {
    mutate,
    isPending: isPosting,
    isError: isPostError,
    error: postError,
  } = usePostWorkSpaceQuery();
  const [menus, setMenus] = useRecoilState<any[]>(menusState);
  const [modalVisible, setModalVisible] =
    useRecoilState<boolean>(modalVisibleState);
  const [newItemTitle, setNewItemTitle] =
    useRecoilState<string>(newItemTitleState);

  useEffect(() => {
    if (data) {
      const workspaces = data.result.workspaces.map((workspace: any) => ({
        key: workspace.workspaceId,
        title: workspace.workspaceName,
        link: `/${workspace.workspaceName}`,
      }));
      setMenus([{ key: 'workspaces', title: 'Workspaces', items: workspaces }]);
    }
  }, [data, setMenus]);

  const handleAddMenuItemClick = () => {
    setModalVisible(true);
  };

  const handleWorkSpaceClick = useRecoilCallback(
    ({ set }) =>
      (item: WorkSpaceMenuItem) => {
        set(selectedWorkSpaceState, item.title);
        set(selectedWorkSpaceIdState, item.key);
        refreshWorkSpace();
        localStorage.setItem('selectedWorkSpace', item.title);
        localStorage.setItem('selectedWorkSpaceId', item.key.toString());
      }
  );

  const handleModalOk = () => {
    mutate(
      { workspaceName: newItemTitle },
      {
        onSuccess: () => {
          setModalVisible(false);
          refetch();
          setNewItemTitle('');
        },
      }
    );
  };

  const handleModalCancel = () => {
    setModalVisible(false);
    setNewItemTitle('');
  };

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;
  if (isPosting) return <div>Adding Workspace...</div>;
  if (isPostError)
    return <div>Error Adding Workspace: {postError?.message}</div>;

  return (
    <>
      <Menu theme='light' mode='vertical' style={{ width: '100%' }}>
        {menus.map((menu) => (
          <Menu.SubMenu key={menu.key} title={menu.title}>
            {menu.items.map((item: WorkSpaceMenuItem) => (
              <Menu.Item
                key={item.key}
                onClick={() => handleWorkSpaceClick(item)}
              >
                <NavLink to={item.link}>{item.title}</NavLink>
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
        open={modalVisible}
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
