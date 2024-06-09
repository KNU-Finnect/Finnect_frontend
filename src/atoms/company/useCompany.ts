import { ColDef } from 'ag-grid-community';
import { atom } from 'recoil';

import { RowData } from '@finnect/interface/CompanyInterface';

import CustomCellRenderer from '@finnect/pages/companies/components/CustomCellRenderer';

export const rowDataState = atom<RowData[]>({
  key: 'rowDataState',
  default: [],
});

export const columnDefsState = atom<ColDef[]>({
  key: 'columnDefsState',
  default: [
    {
      headerName: 'Companies',
      field: 'companyName',
      checkboxSelection: true,
      rowDrag: true,
      cellRenderer: CustomCellRenderer,
      width: 250,
    },
    { headerName: 'Domains', field: 'domain', filter: true },
  ],
});

export const columnModalVisibleState = atom<boolean>({
  key: 'columnModalVisibleState',
  default: false,
});

export const companyModalVisibleState = atom<boolean>({
  key: 'companyModalVisibleState',
  default: false,
});
