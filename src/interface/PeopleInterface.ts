export interface IPeopleAxiosProps {
  status: number;
  result: {
    people: IPeopleAxiosProps[];
  };
}

export interface IPeopleProps {
  personName: string;
  personRole: string;
  personEmail: string;
  companyId: number;
  personPhone: string;
}

export interface IPeopleAxiosProps {
  personId: string;
  personName: string;
  personRole: string;
  personEmail: string;
  companyId: number;
  personPhone: string;
}

export interface ICompanyAxiosProps {
  companyId: number;
  companyName: string;
  companyDomain: string;
}
