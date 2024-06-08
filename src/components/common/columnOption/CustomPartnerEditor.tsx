import { Select } from 'antd';
import { useState } from 'react';

import { usePWcpCellQ } from '@finnect/hooks/queries/colOption/usePWcpCellQ';
import { useGetCV } from '@finnect/hooks/queries/company/useGetCV';

import { useGetWC } from '@finnect/hooks/queries/company/useGetWC';
import { RowData } from '@finnect/interface/CompanyInterface';

const { Option } = Select;

const CustomPartnerEditor = (props: any) => {
  const { refetch } = useGetCV();
  const { mutate, isPending } = usePWcpCellQ(() => {
    refetch();
  });
  const { data } = useGetWC();
  const [value, setValue] = useState(props.value);

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  const handleSave = async () => {
    mutate({
      columnId: props.colDef.columnId,
      rowId: props.data.rowId,
      value,
    });
    refetch();
  };

  return (
    <>
      <Select
        value={value}
        onChange={handleChange}
        onBlur={handleSave}
        style={{ width: '100%' }}
      >
        {data.result.companies.map((data: RowData) => (
          <Option key={data.companyId} value={data.companyName}>
            {data.companyName}
          </Option>
        ))}
      </Select>
      {isPending && <span>Loading...</span>}
    </>
  );
};

export default CustomPartnerEditor;
