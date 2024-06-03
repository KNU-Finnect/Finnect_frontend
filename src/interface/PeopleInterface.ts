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
  personPhone: string;
}
