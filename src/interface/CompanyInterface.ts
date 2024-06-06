export interface CompanyInterface {
  Companies: string;
  Domains: string;
  Categories: string;
  About: string;
}

export interface ICompanyPostProps {
  domain: string;
  companyName: string;
}

export interface CompanyColumnInterface {
  name: string;
  type: string;
}

export interface IViewCompany {
  companyId: number;
  domain: string;
  companyName: string;
  rowId: number;
  cells: {
    columnId: number;
    value: string;
    peopleId: number;
    companyId: number;
    userId: number;
  }[];
}

export interface IViewColumn {
  columnId: number;
  index: number;
  hided: boolean;
  columnType: string;
  columnName: string;
  sorting: string;
}

export interface ICVDataProps {
  status: number;
  result: {
    viewId: number;
    viewName: string;
    filters: {
      filterId: number;
      columnId: number;
      condition: string;
      value: string;
    }[];
    viewColumns: IViewColumn[];
    viewCompanies: IViewCompany[];
  };
}

export interface RowData {
  companyId: number;
  companyName: string;
  domain: string;
  [key: string]: any; // 인덱스 시그니처 추가
}
