import { useMemo, useState } from 'react';

import { AgGridReact } from 'ag-grid-react';
import { Button, Modal } from 'antd';

import { PlusOutlined } from '@ant-design/icons';
import ColumnForm from '@finnect/pages/companies/components/ColumnForm';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

const CompanyAgGrid = () => {
  const [rowData, setRowData] = useState([
    {
      Companies: 'Tesla',
      Domains: 'Model Y',
      Categories: '64950',
      About: 'true',
    },
    {
      Companies: 'Microsoft',
      Domains: 'Model Y-Seires',
      Categories: '14950',
      About: 'true',
    },
  ]);

  const [columnDefs, setColumnDefs] = useState([
    {
      field: 'Companies',
      checkboxSelection: true,
      editable: true,
    },
    { field: 'Domains', editable: true },
    { field: 'Categories', editable: true },
    { field: 'About', editable: true },
  ]);

  const defaultColDef = useMemo(() => {
    return {
      filter: 'agTextColumnFilter',
      floatingFilter: true,
    };
  }, []);

  const handleAddColumn = () => {
    setColumnModalVisible(true);
  };

  const handleColumnModalCancel = () => {
    setColumnModalVisible(false);
  };

  const handleCreateColumn = (values) => {
    const { name, type } = values;
    setColumnDefs((prevDefs) => [
      ...prevDefs,
      {
        field: name,
        editable: true,
      },
    ]);
    setColumnModalVisible(false);
  };

  const [columnModalVisible, setColumnModalVisible] = useState(false);

  return (
    <div style={{ padding: '16px' }}>
      <div style={{ marginBottom: '16px' }}>
        <Button
          type='primary'
          onClick={handleAddColumn}
          icon={<PlusOutlined />}
        >
          속성 추가하기
        </Button>
      </div>
      <div className='ag-theme-quartz' style={{ height: '500px' }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowSelection='multiple'
          suppressRowClickSelection={true}
          pagination={true}
          paginationPageSize={10}
          paginationPageSizeSelector={[10, 25, 50]}
        />
      </div>
      <Modal
        title='속성 추가하기'
        visible={columnModalVisible}
        onCancel={handleColumnModalCancel}
        footer={null}
      >
        <ColumnForm onCreate={handleCreateColumn} />
      </Modal>
    </div>
  );
};

export default CompanyAgGrid;
