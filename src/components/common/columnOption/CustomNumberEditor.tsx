import { useState } from 'react';

import { Input } from 'antd';

import { usePWcpCellQ } from '@finnect/hooks/queries/colOption/usePWcpCellQ';
import { useGetCV } from '@finnect/hooks/queries/company/useGetCV';

const CustomNumberEditor = (props: any) => {
  const { refetch } = useGetCV();

  const { mutate, isPending } = usePWcpCellQ(() => {
    refetch();
  });
  const [value, setValue] = useState(props.value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSave = async () => {
    mutate({
      columnId: props.colDef.columnId,
      rowId: props.data.rowId,
      value,
    });
  };

  return (
    <>
      <Input
        type='number'
        value={value}
        onChange={handleChange}
        onBlur={handleSave}
      />
      {isPending && <span>Loading...</span>}
    </>
  );
};

export default CustomNumberEditor;
