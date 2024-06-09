// @finnect/hooks/custom-hooks/company/useCompanyData.ts
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import {
  rowDataState,
  columnDefsState,
} from '@finnect/atoms/company/useCompany';
import { useGetCV } from '@finnect/hooks/queries/company/useGetCV';

import { RowData } from '@finnect/interface/CompanyInterface';

import CustomCategoryEditor from '@finnect/pages/companies/components/CustomCategoryEditor';

import CustomCellEditor from '@finnect/components/common/columnOption/CustomCellEditor';
import CustomDateEditor from '@finnect/components/common/columnOption/CustomDateEditor';
import CustomStatusEditor from '@finnect/components/common/columnOption/CustomStatusEditor';
import CustomNumberEditor from '@finnect/components/common/columnOption/CustomNumberEditor';
import CustomCurrencyEditor from '@finnect/components/common/columnOption/CustomCurrenctyEditor';
import CustomRatingEditor from '@finnect/components/common/columnOption/CustomRatingEditor';
import CustomCheckBoxEditor from '@finnect/components/common/columnOption/CustomCheckBoxEditor';
import CustomPartnerEditor from '@finnect/components/common/columnOption/CustomPartnerEditor';
import CustomPersonEditor from '@finnect/components/common/columnOption/CustomPersonEditor';

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
      const columnsFromApi = data.result.viewColumns.map((col) => {
        let cellEditor;

        if (col.columnType) {
          switch (col.columnType?.type) {
            case 'SELECT':
              cellEditor = CustomCategoryEditor;
              break;
            case 'PERSON':
              cellEditor = CustomPersonEditor;
              break;
            case 'PARTNER':
              cellEditor = CustomPartnerEditor;
              break;
            case 'CHECKBOX':
              cellEditor = CustomCheckBoxEditor;
              break;
            case 'RATING':
              cellEditor = CustomRatingEditor;
              break;
            case 'CURRENCY':
              cellEditor = CustomCurrencyEditor;
              break;
            case 'TEXT':
              cellEditor = CustomCellEditor;
              break;
            case 'NUMBER':
              cellEditor = CustomNumberEditor;
              break;
            case 'STATUS':
              cellEditor = CustomStatusEditor;
              break;
            case 'DATE':
              cellEditor = CustomDateEditor;
              break;
            case 'URL':
              cellEditor = CustomCellEditor;
              break;
            default:
              cellEditor = CustomCellEditor;
              break;
          }
        } else {
          cellEditor = CustomCellEditor;
        }

        const column = {
          headerName: col.columnName,
          field: col.columnName,
          sortable: true,
          filter: true,
          hide: col.hided,
          columnId: col.columnId,
          cellEditor: cellEditor,
        };

        return column;
      });

      const newColumns = columnsFromApi.filter((col) =>
        columnDefs.every((existingCol) => existingCol.field !== col.field)
      );

      const combinedColumns = [...columnDefs, ...newColumns];

      const rows = data.result.viewCompanies.map((company) => {
        const row: RowData = {
          companyId: company.companyId,
          companyName: company.companyName,
          domain: company.domain,
          rowId: company.rowId,
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
      setRowData(rows);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return {
    rowData,
    columnDefs,
    isPending,
    isError,
    error,
  };
};
