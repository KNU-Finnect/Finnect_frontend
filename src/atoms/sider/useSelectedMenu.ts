import { atom } from 'recoil';

export const selectedMenuItem = localStorage.getItem('selectedMenuItem');
export const selectedWorkSpaceId = localStorage.getItem('selectedWorkSpaceId');
export const selectedWorkSpace = localStorage.getItem('selectedWorkSpace');

export const selectedMenuItemState = atom({
  key: 'selectedMenuItemState',
  default: selectedMenuItem,
});

export const selectedWorkSpaceIdState = atom({
  key: 'selectedWorkSpaceId',
  default: selectedWorkSpaceId,
});

export const selectedWorkSpaceState = atom({
  key: 'selectedWorkSpaceState',
  default: selectedWorkSpace,
});
