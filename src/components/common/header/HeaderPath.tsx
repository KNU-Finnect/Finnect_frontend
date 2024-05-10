import { useEffect } from 'react';

import { Space, Breadcrumb } from 'antd';
import { useRecoilState } from 'recoil';

import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import {
  selectedMenuItemState,
  selectedWorkSpaceState,
} from '@finnect/atoms/sider/useSelectedMenu';

const HeaderPath = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useRecoilState(
    selectedMenuItemState
  );

  const [selectedWorkSpace, setSelectedWorkSpace] = useRecoilState(
    selectedWorkSpaceState
  );

  useEffect(() => {
    const handleStorageChange = (event: any) => {
      console.log('Storage changed:', event.newValue);
      if (event.key === 'selectedMenuItem') {
        setSelectedMenuItem(event.newValue);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [setSelectedMenuItem]);

  useEffect(() => {
    const handleWorkSpaceStorageChange = (event: any) => {
      console.log('Storage changed:', event.newValue);
      if (event.key === 'selectedWorkSpaceState') {
        setSelectedWorkSpace(event.newValue);
      }
    };

    window.addEventListener('storage', handleWorkSpaceStorageChange);

    return () => {
      window.removeEventListener('storage', handleWorkSpaceStorageChange);
    };
  }, [setSelectedWorkSpace]);

  return (
    <Space size='middle'>
      <Breadcrumb>
        <Breadcrumb.Item>
          <HomeOutlined />
          <span>{selectedWorkSpace}</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <UserOutlined />
          <span>{selectedMenuItem}</span>
        </Breadcrumb.Item>
      </Breadcrumb>
    </Space>
  );
};

export default HeaderPath;
