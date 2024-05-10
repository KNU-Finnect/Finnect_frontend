import { atom } from 'recoil';

export const invitedEmailsState = atom<string[]>({
  key: 'invitedEmailsState',
  default: [],
});

export const emailState = atom({
  key: 'emailState',
  default: '',
});
