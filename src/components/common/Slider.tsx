import { useState } from 'react';

import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useRecoilState } from 'recoil';

import { AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import {
  GetLevelKeys,
  LevelKeysProps,
} from '@finnect/hooks/custom-hooks/GetLevelKeys';
import Sider from 'antd/es/layout/Sider';

type MenuItem = Required<MenuProps>['items'][number];

const workspaceItems: MenuItem[] = [
  {
    key: '1',
    icon: <AppstoreOutlined />,
    label: 'Default WorkSpace',
    children: [
      { key: '11', label: 'Companies' },
      { key: '12', label: 'People' },
      { key: '13', label: 'Add WorkSpace' },
    ],
  },
];

const items: MenuItem[] = [
  {
    key: '2',
    icon: <AppstoreOutlined />,
    label: 'Records',
    children: [
      { key: '21', label: 'Companies' },
      { key: '22', label: 'People' },
      { key: '23', label: 'Deals' },
    ],
  },
  {
    key: '3',
    icon: <SettingOutlined />,
    label: 'Views',
    children: [{ key: '31', label: 'Startup Fundraising' }],
  },
];

const levelKeys = GetLevelKeys(items as LevelKeysProps[]);
const workspaceLevelKeys = GetLevelKeys(workspaceItems as LevelKeysProps[]);

const Slider = () => {
  const [stateWorkspaceOpenKeys, setStateWorkspaceOpenKeys] = useState(['']);
  const [stateOpenKeys, setStateOpenKeys] = useState(['']);

  const onOpenWorkspaceChange: MenuProps['onOpenChange'] = (openKeys) => {
    const currentOpenKey = openKeys.find(
      (key) => stateWorkspaceOpenKeys.indexOf(key) === -1
    );
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex(
          (key) =>
            workspaceLevelKeys[key] === workspaceLevelKeys[currentOpenKey]
        );

      setStateWorkspaceOpenKeys(
        openKeys
          .filter((_, index) => index !== repeatIndex)
          .filter(
            (key) =>
              workspaceLevelKeys[key] <= workspaceLevelKeys[currentOpenKey]
          )
      );
    } else {
      setStateWorkspaceOpenKeys(openKeys);
    }
  };

  const onOpenChange: MenuProps['onOpenChange'] = (openKeys) => {
    const currentOpenKey = openKeys.find(
      (key) => stateOpenKeys.indexOf(key) === -1
    );
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);

      setStateOpenKeys(
        openKeys
          .filter((_, index) => index !== repeatIndex)
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
      );
    } else {
      setStateOpenKeys(openKeys);
    }
  };

  return (
    <Sider
      theme='light'
      style={{
        overflow: 'auto',
        height: '100%',
        position: 'fixed',
        left: 0,
        width: '100%',
        maxWidth: 204,
      }}
    >
      <Menu
        mode='vertical'
        defaultSelectedKeys={['231']}
        openKeys={stateWorkspaceOpenKeys}
        onOpenChange={onOpenWorkspaceChange}
        style={{ width: '100%', maxWidth: 204, fontSize: 12 }}
        items={workspaceItems}
      />
      <Menu
        mode='inline'
        defaultSelectedKeys={['231']}
        openKeys={stateOpenKeys}
        onOpenChange={onOpenChange}
        style={{ width: '100%', maxWidth: 204, fontSize: 12 }}
        items={items}
      />
    </Sider>
  );
};

export default Slider;
