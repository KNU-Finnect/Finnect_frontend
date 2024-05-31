import { useMemo } from 'react';

import { AgGridReact } from 'ag-grid-react';

import { Button, Modal } from 'antd';

import PeopleForm from '@finnect/components/common/modal/people/PeopleForm';

import { IPeopleProps } from '@finnect/interface/PeopleInterface';

import { usePeopleModal } from '@finnect/hooks/custom-hooks/usePeopleModal';
import { usePeopleData } from '@finnect/hooks/custom-hooks/usePeopleData';

import { PlusOutlined } from '@ant-design/icons';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

const PeopleAgGrid = () => {
  const { rowData, columnDefs, addPerson } = usePeopleData();

  const { peopleModalVisible, showPeopleModal, hidePeopleModal } =
    usePeopleModal();

  const defaultColDef = useMemo(() => {
    return {
      editable: true,
    };
  }, []);

  const handleCreatePeople = ({ nickname, role, phone }: IPeopleProps) => {
    addPerson({ nickname, role, phone });
    hidePeopleModal();
  };

  return (
    <div style={{ padding: '16px' }}>
      <div style={{ marginBottom: '16px' }}>
        <Button
          type='primary'
          onClick={showPeopleModal}
          icon={<PlusOutlined />}
        >
          People 추가하기
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
        title='People 추가하기'
        open={peopleModalVisible}
        onCancel={hidePeopleModal}
        footer={null}
      >
        <PeopleForm onCreatePeople={handleCreatePeople} />
      </Modal>
    </div>
  );
};

export default PeopleAgGrid;
