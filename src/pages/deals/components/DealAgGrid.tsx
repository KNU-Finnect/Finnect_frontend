import { PlusOutlined } from '@ant-design/icons';
import { AgGridReact } from 'ag-grid-react';
import { Button, Modal } from 'antd';
import { useMemo } from 'react';
import styled from 'styled-components';

const DealAgGrid = () => {
  const { rowData, columnDefs, addColumn, addCompany } = useDealData();

  const defaultColDef = useMemo(() => {
    return {
      filter: true,
      editable: true,
      floatingFilter: true,
    };
  }, []);
  return (
    <DealAgGridWrapper>
      <ButtonWrapper>
        <Button
          type='primary'
          // onClick={showColumnModal}
          icon={<PlusOutlined />}
          style={{ marginRight: '12px' }}
        >
          속성 추가하기
        </Button>
        <Button
          type='primary'
          // onClick={showDealModal}
          icon={<PlusOutlined />}
          style={{ marginRight: '12px' }}
        >
          딜 추가하기
        </Button>
      </ButtonWrapper>
      <AgGridWrapper>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowSelection='multiple'
          suppressRowClickSelection={true}
          rowDragManaged={true}
        />
      </AgGridWrapper>
      <Modal
        title='속성 추가하기'
        // open={columnDealModalVisible}
        // onCancel={hideColumnDealModal}
        footer={null}
      >
        {/* <ColumnForm onCreate={handleCreateColumn} /> */}
      </Modal>
      <Modal
        title='딜 추가하기'
        // open={DealModalVisible}
        // onCancel={hideDealModal}
        footer={null}
      >
        {/* <CompanyForm onCreateDeal={handleCreateCompany} /> */}
      </Modal>
    </DealAgGridWrapper>
  );
};

export default DealAgGrid;

const DealAgGridWrapper = styled.div`
  padding: 16px;
`;
const ButtonWrapper = styled.div`
  margin-bottom: 16px;
`;

const AgGridWrapper = styled.div``;
