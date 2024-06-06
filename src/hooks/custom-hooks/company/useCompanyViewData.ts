// @finnect/hooks/custom-hooks/company/useCompanyData.ts
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import {
  rowDataState,
  columnDefsState,
} from '@finnect/atoms/company/useCompany';
import { useGetCV } from '@finnect/hooks/queries/company/useGetCV';

import { RowData } from '@finnect/interface/CompanyInterface';

export const useCompanyViewData = () => {
  const [rowData, setRowData] = useRecoilState(rowDataState);
  const [columnDefs, setColumnDefs] = useRecoilState(columnDefsState);
  const { data, isPending, isError, error } = useGetCV();

  useEffect(() => {
    if (
      data &&
      data.result &&
      data.result.viewColumns &&
      data.result.viewCompanies
    ) {
      const columnsFromApi = data.result.viewColumns.map((col) => ({
        headerName: col.columnName,
        field: col.columnName,
        sortable: true,
        filter: true,
        hide: col.hided,
      }));

      const combinedColumns = [...columnDefs, ...columnsFromApi];

      const rows = data.result.viewCompanies.map((company) => {
        const row: RowData = {
          companyId: company.companyId,
          companyName: company.companyName,
          domain: company.domain,
        };
        company.cells.forEach((cell) => {
          const column = data.result.viewColumns.find(
            (col) => col.columnId === cell.columnId
          );
          if (column) {
            row[column.columnName] = cell.value;
          }
        });
        return row;
      });

      setColumnDefs(combinedColumns);
      setRowData([...rowData, ...rows]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return { rowData, columnDefs, isPending, isError, error };
};
