import { atom } from 'recoil';

export const selectedMenuItem = localStorage.getItem('selectedMenuItem');
export const selectedWorkSpace = localStorage.getItem('selectedWorkSpace');

export const selectedMenuItemState = atom({
  key: 'selectedMenuItemState',
  default: selectedMenuItem,
});

export const selectedWorkSpaceState = atom({
  key: 'selectedWorkSpaceState',
  default: selectedWorkSpace,
});
