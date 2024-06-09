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

export interface IViewColumnType {
  type: string;
  filterConditions: string[];
}

export interface IViewColumn {
  columnId: number;
  index: number;
  hided: boolean;
  columnType: IViewColumnType;
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
  [key: string]: any;
}

export interface ICVDetailDataProps {
  status: number;
  result: {
    company: {
      companyId: number;
      domain: string;
      companyName: string;
    };
    cells: ICVDCellsProps[];
  };
}

export interface ICVDCellsProps {
  columnId: number;
  value: string;
  userId: number;
  peopleId: number;
  columnType: string;
  columnName: string;
}

export interface ICVPDetailDataProps {
  status: number;
  result: {
    people: ICVPPeopleProps[];
  };
}

export interface ICVPPeopleProps {
  companyId: number;
  personId: number;
  personName: string;
  personRole: string;
  personEmail: string;
  personPhone: string;
}

export interface IPRowData {
  personName: string;
  personRole: string;
  personEmail: string;
  personPhone: string;
}
