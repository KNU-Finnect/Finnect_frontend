import { useState, useEffect } from 'react';

import { Layout } from 'antd';
import { useRecoilState } from 'recoil';

import { selectedMenuItemState } from '@finnect/atoms/sider/useSelectedMenu';
import HeaderBox from '@finnect/components/common/header/HeaderBox';
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
  }, [selectedMenuItem]);

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

  return (
    <Layout>
      <HeaderBox />
      {renderComponent()}
    </Layout>
  );
};

export default WorkSpacePage;
