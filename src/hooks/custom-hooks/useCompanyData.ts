import { useEffect } from 'react';

import { ColDef } from 'ag-grid-community';
import axios from 'axios';
import { useRecoilState } from 'recoil';

import {
  rowDataState,
  columnDefsState,
} from '@finnect/atoms/company/useCompany';
import {
  CompanyInterface,
  CompanyColumnInterface,
} from '@finnect/interface/CompanyInterface';

export const useCompanyData = () => {
  const [rowData, setRowData] = useRecoilState(rowDataState);
  const [columnDefs, setColumnDefs] = useRecoilState(columnDefsState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/companies');
        setRowData(response.data);
      } catch (error) {
        console.error('Error fetching row data:', error);
      }
    };

    fetchData();
  }, [setRowData]);

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
    try {
      const response = await axios.post('/api/new/company', {
        Companies: name,
        Domains: domain,
      });
      const newCompany: CompanyInterface = response.data;
      setRowData((prevData) => [...prevData, newCompany]);
    } catch (error) {
      console.error('Error adding company:', error);
    }
  };

  return {
    rowData,
    columnDefs,
    addColumn,
    addCompany,
  };
};
