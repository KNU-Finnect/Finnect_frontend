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

export interface ICVDataProps {
  status: number;
  result: {
    viewId: number;
    viewName: string;
    filters: [
      {
        filterId: number;
        columnId: number;
        condition: string;
        value: string;
      },
    ];
    viewColumns: [
      {
        columnId: number;
        index: number;
        hided: boolean;
        columnType: string;
        columnName: string;
        sorting: string;
      },
    ];
    viewCompanies: [
      {
        companyId: number;
        domain: string;
        companyName: string;
        rowId: number;
        cells: [
          {
            columnId: number;
            value: string;
            peopleId: number;
            companyId: number;
            userId: number;
          },
        ];
      },
    ];
  };
}
