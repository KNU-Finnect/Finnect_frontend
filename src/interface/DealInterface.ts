export interface IDealAxiosProps {
  status: number;
  result: {
    deals: IDealResultProps[];
  };
}
export interface IDealResultProps {
  dealId: number;
  dealName: string;
  companyId: number;
  userId: number;
  workspaceId: number;
  dataRowId: number;
}

export interface IDealProps {
  companyId: number;
  workspaceId: number;
  userId: number;
  userName: string;
  companyName: string;
  dealName: string;
}

export interface IDealRow {
  people: string;
  company: string;
  text: string;
  user: string;
  date: string;
  currency: number;
  select: string;
}
