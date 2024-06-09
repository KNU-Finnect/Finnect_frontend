import { PlusOutlined } from '@ant-design/icons';
import { useState, useEffect, useMemo } from 'react';
import { getDealList } from '@finnect/apis/deal/useDeal';
import { IDealRow } from '@finnect/interface/DealInterface';
import { ColDef } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import { Button, Modal } from 'antd';
import styled from 'styled-components';
import DealForm from '@finnect/components/common/modal/deals/DealForm';
import DealCustomCell from './DealCustomCell';
import ColumnForm from '@finnect/components/common/modal/deals/DealColumnForm';

interface DealData {
  dealId: number;
  dealName: string;
  companyName: string;
  userName: string;
  createdDate: string;
  dealAmount: number;
  category: string;
  cells: {
    columnId: number;
    value: string;
  }[];
}

const DealAgGrid = () => {
  const [colDefs, setColDefs] = useState<ColDef[]>([]);
  const [rowData, setRowData] = useState<IDealRow[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isColumnModalVisible, setIsColumnModalVisible] = useState(false);

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
      console.log('Deal list:', result);

      const columns = [
        {
          field: 'dealName',
          headerName: 'Deal Name',
          cellRenderer: DealCustomCell,
          checkboxSelection: true,
          rowDrag: true,
          width: 250,
        },
        { field: 'companyName', headerName: 'Company Name' },
        { field: 'userName', headerName: '책임자' },
      ];

      const additionalColumns = result.viewColumns.map((col: any) => ({
        field: col.columnName,
        headerName: col.columnName,
      }));

      setColDefs([...columns, ...additionalColumns]);

      const rows = result.viewDeals.map((deal: DealData) => {
        const dealRow: any = {
          dealId: deal.dealId,
          dealName: deal.dealName,
          companyName: deal.companyName,
          userName: deal.userName,
          createdDate: new Date(deal.createdDate).toLocaleDateString(),
          dealAmount: deal.dealAmount,
          category: deal.category,
        };
        deal.cells.forEach((cell) => {
          const columnName = result.viewColumns.find(
            (col: { columnId: number }) => col.columnId === cell.columnId
          )?.columnName;
          if (columnName) {
            dealRow[columnName] = cell.value;
          }
        });

        return dealRow;
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
    fetchData();
  };

  const showColumnModal = () => {
    setIsColumnModalVisible(true);
  };

  const handleColumnCancel = () => {
    setIsColumnModalVisible(false);
  };

  const handleAddColumnSuccess = () => {
    setIsColumnModalVisible(false);
    fetchData();
  };

  return (
    <DealAgGridWrapper>
      <ButtonWrapper>
        <Button
          type='primary'
          icon={<PlusOutlined />}
          style={{ marginRight: '12px' }}
          onClick={showColumnModal}
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
        title='속성 추가하기'
        visible={isColumnModalVisible}
        onCancel={handleColumnCancel}
        footer={null}
      >
        <ColumnForm onAddSuccess={handleAddColumnSuccess} />
      </Modal>
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
