import { useRecoilState } from 'recoil';
import { AgGridReact } from 'ag-grid-react';

import {
  columnPDefsState,
  rowPDataState,
} from '@finnect/atoms/company/useCompanyPeople';

import { ICVPDetailDataProps } from '@finnect/interface/CompanyInterface';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { useEffect } from 'react';

const CompanyPeople = ({ cellData }: { cellData: ICVPDetailDataProps }) => {
  const { result } = cellData;
  console.log('result:', result);
  const [columnDefs] = useRecoilState(columnPDefsState);
  const [rowPData, setRowPData] = useRecoilState(rowPDataState);

  useEffect(() => {
    if (result) {
      setRowPData(result.people);
    }
  }, [result, setRowPData]);

  return (
    <div className='ag-theme-quartz' style={{ height: '500px' }}>
      <AgGridReact
        rowData={rowPData}
        columnDefs={columnDefs}
        rowSelection='single'
        suppressRowClickSelection={true}
        rowDragManaged={false}
      />
    </div>
  );
};

export default CompanyPeople;
