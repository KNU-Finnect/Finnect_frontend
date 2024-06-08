export interface IMemberProps {
  nickname: string;
  role: string;
  phone: string;
}

export interface InviteMemeberProps {
  status: number;
  workspaceId: number;
}

export interface InviteProps {
  email: string[];
  result: string;
  status: number;
}
