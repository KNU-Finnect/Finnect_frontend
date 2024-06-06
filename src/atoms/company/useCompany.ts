import { ColDef } from 'ag-grid-community';
import { atom } from 'recoil';

import { RowData } from '@finnect/interface/CompanyInterface';

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
    },
    { headerName: 'Domains', field: 'domain', filter: true },
  ],
});

export const isPendingState = atom<boolean>({
  key: 'isPendingState',
  default: false,
});

export const isErrorState = atom<boolean>({
  key: 'isErrorState',
  default: false,
});

export const errorState = atom<any>({
  key: 'errorState',
  default: null,
});

export const columnModalVisibleState = atom<boolean>({
  key: 'columnModalVisibleState',
  default: false,
});

export const companyModalVisibleState = atom<boolean>({
  key: 'companyModalVisibleState',
  default: false,
});
