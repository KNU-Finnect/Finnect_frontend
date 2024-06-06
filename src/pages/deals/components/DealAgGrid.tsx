import { PlusOutlined } from '@ant-design/icons';
// import { getDealList } from '@finnect/apis/deal/useDeal';
import DealForm from '@finnect/components/common/modal/deals/DealForm';
import { IDealRow } from '@finnect/interface/DealInterface';
import { ColDef } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import { Button, Modal } from 'antd';
import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const DealAgGrid = () => {
  const CustomButtonComponent = () => {
    const navigate = useNavigate();
    const companyHandler = () => {
      navigate('./deals');
    };
    return <Button onClick={companyHandler}>더보기</Button>;
  };
  // const [rowData, setRowData] = useState<IDealRow[]>([]);
  const [rowData] = useState<IDealRow[]>([
    {
      company: 'Apple Inc.',
      text: 'This is a sample text for Apple.',
      user: 'John Doe',
      date: '2023-06-01',
      currency: 1000,
      select: 'Option 1',
    },
    {
      company: 'Google LLC',
      text: 'Google is a great company.',
      user: 'Jane Smith',
      date: '2023-06-02',
      currency: 2000,
      select: 'Option 2',
    },
    {
      company: 'Microsoft Corp.',
      text: 'Microsoft produces Windows OS.',
      user: 'Alice Johnson',
      date: '2023-06-03',
      currency: 3000,
      select: 'Option 3',
    },
    {
      company: 'Amazon.com Inc.',
      text: 'Amazon is an e-commerce giant.',
      user: 'Bob Brown',
      date: '2023-06-04',
      currency: 4000,
      select: 'Option 4',
    },
    {
      company: 'Facebook Inc.',
      text: 'Facebook owns Instagram.',
      user: 'Charlie Davis',
      date: '2023-06-05',
      currency: 5000,
      select: 'Option 5',
    },
  ]);

  const [colDefs] = useState<(ColDef<IDealRow> | ColDef<any, any>)[]>([
    { field: 'detial', cellRenderer: CustomButtonComponent },
    { field: 'company' },
    { field: 'text' },
    { field: 'user' },
    { field: 'date' },
    { field: 'currency' },
    { field: 'select' },
  ]);
  const defaultColDef = useMemo(() => {
    return {
      filter: true,
      editable: true,
      floatingFilter: true,
    };
  }, []);
  const [isDealModalVisible, setIsDealModalVisible] = useState(false);

  // const fetchDeals = async () => {
  //   try {
  //     const response = await getDealList();
  //     const data: IDealRow[] = response.data;
  //     console.log('data:', data);
  //     // setRowData(data);
  //   } catch (error) {
  //     console.error('Error fetching deal data:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchDeals();
  // }, []);

  const showDealModal = () => {
    setIsDealModalVisible(true);
  };

  const handleDealModalOk = () => {
    setIsDealModalVisible(false);
  };

  const handleDealModalCancel = () => {
    setIsDealModalVisible(false);
  };

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
        <Button type='primary' onClick={showDealModal} icon={<PlusOutlined />}>
          딜 추가하기
        </Button>
      </ButtonWrapper>
      <div className='ag-theme-quartz' style={{ height: '500px' }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
          rowSelection='multiple'
          suppressRowClickSelection={true}
          rowDragManaged={true}
        />
      </div>
      <Modal
        title='딜 추가하기'
        open={isDealModalVisible}
        onOk={handleDealModalOk}
        onCancel={handleDealModalCancel}
        footer={null}
      >
        <DealForm />
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
