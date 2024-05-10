import { atom } from 'recoil';

export const selectedHeaderMenuState = atom({
  key: 'selectedHeaderMenuState',
  default: false,
});

export const selectedInviteModalState = atom({
  key: 'selectedInviteModalState',
  default: false,
});
