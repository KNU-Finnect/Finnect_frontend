import { PlusOutlined } from '@ant-design/icons';
import { useState, useEffect, useMemo } from 'react';
import { getDealList } from '@finnect/apis/deal/useDeal';
import { IDealRow } from '@finnect/interface/DealInterface';
import { ColDef } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import { Button, Modal } from 'antd';
import styled from 'styled-components';
import DealForm from '@finnect/components/common/modal/deals/DealForm';

interface DealData {
  companyId: number;
  dealName: string;
  userId: number;
  cells: {
    columnId: number;
    value: string;
  }[];
}

const DealAgGrid = () => {
  const [colDefs, setColDefs] = useState<
    (ColDef<IDealRow> | ColDef<any, any>)[]
  >([]);
  const [rowData, setRowData] = useState<IDealRow[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const defaultColDef = useMemo(
    () => ({
      filter: true,
      editable: true,
      floatingFilter: true,
    }),
    []
  );

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await getDealList();
      const result = response.data.result;

      const columns = result.viewColumns.map((col: any) => ({
        field: col.columnName,
        headerName: col.columnName,
        columnId: col.columnId,
      }));

      const predefinedColumns = [
        { field: 'dealName', headerName: 'Deal Name' },
        { field: 'companyId', headerName: 'Company ID' },
        { field: 'userId', headerName: 'User ID' },
      ];

      setColDefs([...predefinedColumns, ...columns]);

      const rows = result.viewDeals.map((deal: DealData) => {
        const row: any = {
          dealName: deal.dealName,
          companyId: deal.companyId,
          userId: deal.userId,
        };

        deal.cells.forEach((cell) => {
          const column = columns.find(
            (col: any) => col.columnId === cell.columnId
          );
          if (column) {
            row[column.field] = cell.value;
          }
        });

        return row;
      });

      setRowData(rows);
      console.log('Transformed deal list:', rows);
    } catch (error) {
      console.error('Error fetching deal list:', error);
    }
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleAddSuccess = () => {
    setIsModalVisible(false);
    fetchData(); // 모달이 닫힐 때마다 데이터 다시 불러오기
  };

  return (
    <DealAgGridWrapper>
      <ButtonWrapper>
        <Button
          type='primary'
          icon={<PlusOutlined />}
          style={{ marginRight: '12px' }}
        >
          속성 추가하기
        </Button>
        <Button type='primary' icon={<PlusOutlined />} onClick={showModal}>
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
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <DealForm onAddSuccess={handleAddSuccess} />
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
