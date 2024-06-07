import { PlusOutlined } from '@ant-design/icons';
import { getDealList } from '@finnect/apis/deal/useDeal';

import { IDealRow } from '@finnect/interface/DealInterface';
import { ColDef } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import { Button, Modal } from 'antd';
import { useState, useMemo, useEffect } from 'react';
import styled from 'styled-components';
// import DealDetailModal from '../DealDetialModal';

const DealAgGrid = () => {
  const CustomButtonComponent = ({ data }: { data: IDealRow }) => {
    const showDealDetails = () => {
      setSelectedDeal(data);
      setIsDealModalVisible(true);
    };
    return <Button onClick={showDealDetails}>더보기</Button>;
  };

  const [colDefs] = useState<(ColDef<IDealRow> | ColDef<any, any>)[]>([
    { field: 'detail', cellRenderer: CustomButtonComponent },
    { field: 'company' },
    { field: 'text' },
    { field: 'user' },
    { field: 'date' },
    { field: 'currency' },
    { field: 'select' },
  ]);

  const defaultColDef = useMemo(
    () => ({
      filter: true,
      editable: true,
      floatingFilter: true,
    }),
    []
  );

  // const [rowData, setRowData] = useState<IDealRow[]>([]);
  const [isDealModalVisible, setIsDealModalVisible] = useState(false);
  const [selectedDeal, setSelectedDeal] = useState<IDealRow | null>(null);

  useEffect(() => {
    const fetchDealList = async () => {
      try {
        const response = await getDealList();
        // setRowData(response.data);
        console.log('Deal list:', response.data);
      } catch (error) {
        console.error('Error fetching deal list:', error);
      }
    };

    fetchDealList();
  }, []);

  const showDealModal = () => {
    setIsDealModalVisible(true);
  };

  // const handleDealModalOk = () => {
  //   setIsDealModalVisible(false);
  // };

  // const handleDealModalCancel = () => {
  //   setIsDealModalVisible(false);
  // };

  return (
    <DealAgGridWrapper>
      <ButtonWrapper>
        <Button
          type='primary'
          icon={<PlusOutlined />}
          style={{ marginRight: '12px' }}
          // onClick={showColumnModal} // Uncomment if needed
        >
          속성 추가하기
        </Button>
        <Button type='primary' onClick={showDealModal} icon={<PlusOutlined />}>
          딜 추가하기
        </Button>
      </ButtonWrapper>
      <div className='ag-theme-quartz' style={{ height: '500px' }}>
        <AgGridReact
          rowData={null}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
          rowSelection='multiple'
          suppressRowClickSelection={true}
          rowDragManaged={true}
        />
      </div>
      {/* <Modal
        title='딜 상세보기'
        open={isDealModalVisible}
        onOk={handleDealModalOk}
        onCancel={handleDealModalCancel}
        footer={null}
      >
        {/* {selectedDeal && <DealDetailModal deal={selectedDeal} />} */}
      {/* </Modal> */}
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
