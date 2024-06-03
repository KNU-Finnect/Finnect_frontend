import { useEffect } from 'react';

import { ColDef } from 'ag-grid-community';
import { useRecoilState } from 'recoil';

import {
  rowDataState,
  columnDefsState,
} from '@finnect/atoms/company/useCompany';

import { useGetWC } from '@finnect/hooks/queries/company/useGetWC';
import { usePostWC } from '@finnect/hooks/queries/company/usePostWC';

import { CompanyColumnInterface } from '@finnect/interface/CompanyInterface';

export const useCompanyData = () => {
  const [rowData, setRowData] = useRecoilState(rowDataState);
  const [columnDefs, setColumnDefs] = useRecoilState(columnDefsState);
  const { data, refetch } = useGetWC();
  const { mutate } = usePostWC();

  useEffect(() => {
    if (data) {
      console.log(data.result.companies);
      setRowData(data.result.companies);
    }
  }, [setRowData, data]);

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
          refetch();
        },
      }
    );
  };

  return {
    rowData,
    columnDefs,
    addColumn,
    addCompany,
  };
};
