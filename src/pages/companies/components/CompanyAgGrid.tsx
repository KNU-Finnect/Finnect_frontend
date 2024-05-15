import React, { useMemo, useState, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { ColDef } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

const gridDiv = document.querySelector('#myGrid');

const CompanyAgGrid = () => {
  const [rowData, setRowData] = useState([
    {
      companies: 'Tesla',
      domain: 'Model Y',
      Category: '64950',
      About: 'true',
    },
    {
      companies: 'Tesla',
      domain: 'Model Y-Seires',
      Category: '14950',
      About: 'true',
    },
  ]);

  const [columnDefs, setColumnDefs] = useState<ColDef[]>([
    {
      field: 'companies',
      checkboxSelection: true,
      editable: true,
    },
    { field: 'domain', editable: true },
    { field: 'Category', editable: true },
    { field: 'About', editable: true },
  ]);

  const defaultColDef = useMemo(() => {
    return {
      filter: 'agTextColumnFilter',
      floatingFilter: true,
    };
  }, []);

  return (
    <div className='ag-theme-quartz' style={{ height: 500 }}>
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
  );
};

export default CompanyAgGrid;
