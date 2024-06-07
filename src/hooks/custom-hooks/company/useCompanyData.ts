import { ColDef } from 'ag-grid-community';
import { useRecoilState } from 'recoil';

import { columnDefsState } from '@finnect/atoms/company/useCompany';

import { useGetWC } from '@finnect/hooks/queries/company/useGetWC';
import { usePostWC } from '@finnect/hooks/queries/company/usePostWC';

import { CompanyColumnInterface } from '@finnect/interface/CompanyInterface';
import { useGetCV } from '@finnect/hooks/queries/company/useGetCV';

export const useCompanyData = () => {
  const [columnDefs, setColumnDefs] = useRecoilState(columnDefsState);
  const { refetch: CompanyList } = useGetWC();
  const { refetch: CV } = useGetCV();
  const { mutate } = usePostWC();

  const addColumn = ({ name, type }: CompanyColumnInterface) => {
    let newColumnDef: ColDef;

    if (type === 'text') {
      newColumnDef = {
        headerName: name,
        field: name,
        editable: true,
      };
    } else if (type === 'number') {
      newColumnDef = {
        headerName: name,
        field: name,
        editable: true,
      };
    } else if (type === 'date') {
      newColumnDef = {
        headerName: name,
        field: name,
        editable: true,
      };
    }

    setColumnDefs((prevDefs) => [...prevDefs, newColumnDef]);
  };

  const addCompany = async (name: string, domain: string) => {
    mutate(
      { companyName: name, domain: domain },
      {
        onSuccess: () => {
          CV();
          CompanyList();
        },
      }
    );
  };

  return {
    columnDefs,
    addColumn,
    addCompany,
  };
};
