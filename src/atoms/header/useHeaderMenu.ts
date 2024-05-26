import { atom } from 'recoil';

export const selectedHeaderMenuState = atom({
  key: 'selectedHeaderMenuState',
  default: false,
});

export const selectedInviteModalState = atom({
  key: 'selectedInviteModalState',
  default: false,
});

export const menusState = atom({
  key: 'menusState',
  default: [
    {
      key: 'WorkSpace',
      title: 'WorkSpace',
      items: [],
    },
  ],
});

export const modalVisibleState = atom({
  key: 'modalVisibleState',
  default: false,
});

export const newItemTitleState = atom({
  key: 'newItemTitleState',
  default: '',
});
