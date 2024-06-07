import { ColDef } from 'ag-grid-community';
import { atom } from 'recoil';

import { IPRowData } from '@finnect/interface/CompanyInterface';

export const rowPDataState = atom<IPRowData[]>({
  key: 'rowPDataState',
  default: [],
});

export const columnPDefsState = atom<ColDef[]>({
  key: 'columnPDefsState',
  default: [
    {
      headerName: 'Person',
      field: 'personName',
    },
    { headerName: 'Role', field: 'personRole' },
    { headerName: 'Email', field: 'personEmail' },
    { headerName: 'Phone', field: 'personPhone' },
  ],
});
