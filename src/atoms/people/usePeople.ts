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
      headerName: 'Nickname',
      field: 'nickname',
      checkboxSelection: true,
    },
    { headerName: 'Role', field: 'role' },
    { headerName: 'Phone', field: 'phone' },
  ],
});

export const peopleModalVisibleState = atom<boolean>({
  key: 'peopleModalVisibleState',
  default: false,
});
