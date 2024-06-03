import { atom } from 'recoil';
import { ICompanyAxiosProps } from '@finnect/interface/PeopleInterface';

export const companiesState = atom<ICompanyAxiosProps[]>({
  key: 'companiesState',
  default: [],
});

export const isCompanySelectedState = atom<boolean>({
  key: 'isCompanySelectedState',
  default: false,
});
