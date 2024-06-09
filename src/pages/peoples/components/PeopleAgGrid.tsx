import { useMemo } from 'react';

import { AgGridReact } from 'ag-grid-react';

import { Button, Modal } from 'antd';

import PeopleForm from '@finnect/components/common/modal/people/PeopleForm';

import { IPeopleProps } from '@finnect/interface/PeopleInterface';

import { usePeopleModal } from '@finnect/hooks/custom-hooks/people/usePeopleModal';
import { usePeopleData } from '@finnect/hooks/custom-hooks/people/usePeopleData';

import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

const PeopleAgGrid = () => {
  const {
    rowData,
    columnDefs,
    handleDeletePerson,
    selectedPerson,
    setSelectedPerson,
    addPerson,
  } = usePeopleData();

  const { peopleModalVisible, showPeopleModal, hidePeopleModal } =
    usePeopleModal();

  const defaultColDef = useMemo(() => {
    return {
      editable: true,
    };
  }, []);

  const handleCreatePeople = ({
    personName,
    personRole,
    personEmail,
    companyId,
    personPhone,
  }: IPeopleProps) => {
    addPerson({ personName, personRole, personEmail, companyId, personPhone });
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
        <Button
          type='dashed'
          onClick={handleDeletePerson}
          icon={<DeleteOutlined />}
          disabled={!selectedPerson}
          style={{ marginLeft: '8px' }}
        >
          선택된 People 삭제하기
        </Button>
      </div>
      <div className='ag-theme-quartz' style={{ height: '500px' }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowSelection='single'
          onRowSelected={(event) => setSelectedPerson(event.node.data)}
          suppressRowClickSelection={true}
          rowDragManaged={false}
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
