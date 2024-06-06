import { useMemo } from 'react';

import { AgGridReact } from 'ag-grid-react';
import { Button, Modal } from 'antd';

import { useCompanyViewData } from '@finnect/hooks/custom-hooks/company/useCompanyViewData'; // 새로운 커스텀 훅 import

import ColumnForm from '@finnect/components/common/modal/company/ColumnForm';
import CompanyForm from '@finnect/components/common/modal/company/CompanyForm';

import { useCompanyModal } from '@finnect/hooks/custom-hooks/company/useCompanyModal';

import { PlusOutlined } from '@ant-design/icons';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

const CompanyAgGrid = () => {
  const {
    columnModalVisible,
    companyModalVisible,
    showColumnModal,
    hideColumnModal,
    showCompanyModal,
    hideCompanyModal,
  } = useCompanyModal();

  const { rowData, columnDefs, isPending, isError, error } =
    useCompanyViewData();

  const defaultColDef = useMemo(() => {
    return {
      editable: true,
    };
  }, []);

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;

  return (
    <div style={{ padding: '16px' }}>
      <div style={{ marginBottom: '16px' }}>
        <Button
          type='primary'
          onClick={showColumnModal}
          icon={<PlusOutlined />}
          style={{ marginRight: '12px' }}
        >
          속성 추가하기
        </Button>
        <Button
          type='primary'
          onClick={showCompanyModal}
          icon={<PlusOutlined />}
        >
          회사 추가하기
        </Button>
      </div>
      <div className='ag-theme-quartz' style={{ height: '500px' }}>
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          defaultColDef={defaultColDef}
          rowSelection='multiple'
          suppressRowClickSelection={true}
          rowDragManaged={true}
        />
      </div>
      <Modal
        title='속성 추가하기'
        open={columnModalVisible}
        onCancel={hideColumnModal}
        footer={null}
      >
        <ColumnForm onCreate={() => {}} />
      </Modal>
      <Modal
        title='회사 추가하기'
        open={companyModalVisible}
        onCancel={hideCompanyModal}
        footer={null}
      >
        <CompanyForm onCreateCompany={() => {}} />
      </Modal>
    </div>
  );
};

export default CompanyAgGrid;
