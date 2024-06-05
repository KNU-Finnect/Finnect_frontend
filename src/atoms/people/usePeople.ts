import { ColDef } from 'ag-grid-community';
import { atom } from 'recoil';

import { IPeopleProps } from '@finnect/interface/PeopleInterface';

export const rowPeopleDataState = atom<IPeopleProps[]>({
  key: 'rowPeopleDataState',
  default: [],
});

export const columnDefsPeopleState = atom<ColDef[]>({
  key: 'columnDefsPeopleState',
  default: [
    {
      headerName: 'Name',
      field: 'personName',
      checkboxSelection: true,
    },
    { headerName: 'Company', field: 'companyName' },
    { headerName: 'Role', field: 'personRole' },
    { headerName: 'Email', field: 'personEmail' },
    { headerName: 'Phone', field: 'personPhone' },
  ],
});

export const peopleModalVisibleState = atom<boolean>({
  key: 'peopleModalVisibleState',
  default: false,
});
