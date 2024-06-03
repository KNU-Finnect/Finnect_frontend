import { ColDef } from 'ag-grid-community';
import { atom } from 'recoil';

import { CompanyCategories } from '@finnect/pages/companies/components/CompanyCategories';

import { CompanyInterface } from '@finnect/interface/CompanyInterface';

export const rowDataState = atom<CompanyInterface[]>({
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
    { headerName: 'Domains', field: 'domain' },
    {
      headerName: 'Categories',
      field: 'Categories',
      cellEditor: 'agSelectCellEditor',
      cellEditorParams: {
        values: CompanyCategories,
      },
    },
    { headerName: 'About', field: 'About' },
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
