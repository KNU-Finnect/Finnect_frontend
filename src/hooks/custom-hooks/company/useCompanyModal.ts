import { useRecoilState } from 'recoil';

import {
  columnModalVisibleState,
  companyModalVisibleState,
} from '@finnect/atoms/company/useCompany';

export const useCompanyModal = () => {
  const [columnModalVisible, setColumnModalVisible] = useRecoilState(
    columnModalVisibleState
  );
  const [companyModalVisible, setCompanyModalVisible] = useRecoilState(
    companyModalVisibleState
  );

  const showColumnModal = () => setColumnModalVisible(true);
  const hideColumnModal = () => setColumnModalVisible(false);
  const showCompanyModal = () => setCompanyModalVisible(true);
  const hideCompanyModal = () => setCompanyModalVisible(false);

  return {
    columnModalVisible,
    companyModalVisible,
    showColumnModal,
    hideColumnModal,
    showCompanyModal,
    hideCompanyModal,
  };
};
