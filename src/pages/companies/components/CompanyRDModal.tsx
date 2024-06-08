import { useState } from 'react';

import { Modal, Tabs } from 'antd';

import CompanyColumnType from '@finnect/pages/companies/components/CompanyColumnType';
import CompanyPeople from '@finnect/pages/companies/components/CompanyPeople';

import {
  ICVDetailDataProps,
  ICVPDetailDataProps,
  RowData,
} from '@finnect/interface/CompanyInterface';

import { useGetCVD } from '@finnect/hooks/queries/company/useGetCVD';
import { useGetCVP } from '@finnect/hooks/queries/company/useGetCVP';

interface RowDetailsModalProps {
  visible: boolean;
  onClose: () => void;
  rowData: RowData;
}

const CompanyRDModal: React.FC<RowDetailsModalProps> = ({
  visible,
  onClose,
  rowData,
}) => {
  // console.log('rowData:', rowData.companyId);
  const [activeTab, setActiveTab] = useState('main');
  const { data: companyData, isPending } = useGetCVD(rowData.companyId);
  const { data: companyPData } = useGetCVP(rowData.companyId);
  console.log('모달창', companyData, companyPData);

  // console.log('companyPData:', companyPData);

  const items = [
    {
      key: 'main',
      label: 'Main',
      children: isPending ? (
        <p>Loading...</p>
      ) : (
        <CompanyColumnType cellData={companyData as ICVDetailDataProps} />
      ),
    },
    {
      key: 'people',
      label: 'People',
      children: (
        <CompanyPeople cellData={companyPData as ICVPDetailDataProps} />
      ),
    },
  ];

  return (
    <Modal
      title={rowData.companyName}
      open={visible}
      onOk={onClose}
      onCancel={onClose}
      width={1024}
      styles={{ body: { height: '620px' } }}
    >
      <Tabs
        defaultActiveKey='main'
        activeKey={activeTab}
        onChange={setActiveTab}
        items={items}
      />
    </Modal>
  );
};

export default CompanyRDModal;
