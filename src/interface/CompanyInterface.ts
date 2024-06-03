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
