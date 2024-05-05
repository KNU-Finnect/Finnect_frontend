import { atom, RecoilState } from 'recoil';

export const WorkspaceOpenKeys: RecoilState<string[]> = atom({
  key: 'WorkspaceOpenKeys',
  default: [] as string[],
});

export const OpenKeys: RecoilState<string[]> = atom({
  key: 'OpenKeys',
  default: [] as string[],
});
