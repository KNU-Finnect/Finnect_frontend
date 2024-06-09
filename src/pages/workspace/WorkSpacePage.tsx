import { useEffect } from 'react';

import { Layout } from 'antd';
import { useRecoilState } from 'recoil';

import { selectedMenuItemState } from '@finnect/atoms/sider/useSelectedMenu';
import CompaniesBox from '@finnect/pages/companies/CompaniesBox';
import DealsBox from '@finnect/pages/deals/DealsBox';
import PeoplesBox from '@finnect/pages/peoples/PeoplesBox';

const WorkSpacePage = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useRecoilState(
    selectedMenuItemState
  );

  useEffect(() => {
    const value = localStorage.getItem('selectedMenuItem');
    setSelectedMenuItem(value);
  }, [selectedMenuItem, setSelectedMenuItem]);

  const renderComponent = () => {
    switch (selectedMenuItem) {
      case 'Companies':
        return <CompaniesBox />;
      case 'People':
        return <PeoplesBox />;
      case 'Deals':
        return <DealsBox />;
      default:
        return null;
    }
  };

  return <Layout>{renderComponent()}</Layout>;
};

export default WorkSpacePage;
