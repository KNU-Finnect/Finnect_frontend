import { useMemo } from 'react';

import { AgGridReact } from 'ag-grid-react';
import { Button, Modal } from 'antd';

import ColumnForm from '@finnect/components/common/modal/company/ColumnForm';
import CompanyForm from '@finnect/components/common/modal/company/CompanyForm';

import { useCompanyData } from '@finnect/hooks/custom-hooks/company/useCompanyData';
import { useCompanyModal } from '@finnect/hooks/custom-hooks/company/useCompanyModal';

import { PlusOutlined } from '@ant-design/icons';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

const CompanyAgGrid = () => {
  const { rowData, columnDefs, addColumn, addCompany } = useCompanyData();
  const {
    columnModalVisible,
    companyModalVisible,
    showColumnModal,
    hideColumnModal,
    showCompanyModal,
    hideCompanyModal,
  } = useCompanyModal();

  const defaultColDef = useMemo(() => {
    return {
      filter: true,
      editable: true,
      floatingFilter: true,
    };
  }, []);

  const handleCreateColumn = (values: { name: string; type: string }) => {
    addColumn({ name: values.name, type: values.type });
    hideColumnModal();
  };

  const handleCreateCompany = (values: { name: string; domain: string }) => {
    addCompany(values.name, values.domain);
    hideCompanyModal();
  };

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
          rowData={rowData}
          columnDefs={columnDefs}
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
        <ColumnForm onCreate={handleCreateColumn} />
      </Modal>
      <Modal
        title='회사 추가하기'
        open={companyModalVisible}
        onCancel={hideCompanyModal}
        footer={null}
      >
        <CompanyForm onCreateCompany={handleCreateCompany} />
      </Modal>
    </div>
  );
};

export default CompanyAgGrid;
