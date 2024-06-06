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
  dealName: string;
  userId: number;
}
