export interface IPeopleAxiosProps {
  status: number;
  result: {
    people: IPeopleProps[];
  };
}

export interface IPeopleProps {
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
