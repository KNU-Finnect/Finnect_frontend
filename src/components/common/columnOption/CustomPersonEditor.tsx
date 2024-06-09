import { Select } from 'antd';
import { useState } from 'react';

import { usePWcpCellQ } from '@finnect/hooks/queries/colOption/usePWcpCellQ';
import { useGetCV } from '@finnect/hooks/queries/company/useGetCV';

import { useGetPeopleQuery } from '@finnect/hooks/queries/people/useGetPeopleQuery';

import { IPeopleAxiosProps } from '@finnect/interface/PeopleInterface';

const { Option } = Select;

const CustomPersonEditor = (props: any) => {
  const { refetch } = useGetCV();
  const { mutate, isPending } = usePWcpCellQ(() => {
    refetch();
  });
  const { data } = useGetPeopleQuery();
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
        {data?.result?.people?.map((data: IPeopleAxiosProps) => (
          <Option key={data.personId} value={data.personName}>
            {data.personName}
          </Option>
        ))}
      </Select>
      {isPending && <span>Loading...</span>}
    </>
  );
};

export default CustomPersonEditor;
