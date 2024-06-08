import { Select } from 'antd';
import { useState } from 'react';

import { usePWcpCellQ } from '@finnect/hooks/queries/company/usePWcpCellQ';
import { useGetCV } from '@finnect/hooks/queries/company/useGetCV';

import { CompanyCategories } from '@finnect/pages/companies/components/CompanyCategories';

const { Option } = Select;

const CustomCategoryEditor = (props: any) => {
  const { refetch } = useGetCV();
  const { mutate, isPending } = usePWcpCellQ(() => {
    refetch();
  });
  const [value, setValue] = useState(props.value);

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  const handleSave = async () => {
    await mutate({
      columnId: props.colDef.columnId,
      rowId: props.data.rowId,
      value,
      companyId: props.data.companyId,
    });
    refetch();
  };

  return (
    <>
      <Select value={value} onChange={handleChange} onBlur={handleSave}>
        {CompanyCategories.map((category) => (
          <Option key={category} value={category}>
            {category}
          </Option>
        ))}
      </Select>
      {isPending && <span>Loading...</span>}
    </>
  );
};

export default CustomCategoryEditor;
