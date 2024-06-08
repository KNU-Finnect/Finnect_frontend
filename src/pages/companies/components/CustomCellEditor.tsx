import { useState } from 'react';

import { Input } from 'antd';

import { usePWcpCellQ } from '@finnect/hooks/queries/company/usePWcpCellQ';
import { useGetCV } from '@finnect/hooks/queries/company/useGetCV';

const CustomCellEditor = (props: any) => {
  const { refetch } = useGetCV();

  const { mutate, isPending } = usePWcpCellQ(() => {
    refetch();
  });
  const [value, setValue] = useState(props.value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSave = async () => {
    await mutate({
      columnId: props.colDef.columnId,
      rowId: props.data.rowId,
      value,
      companyId: props.data.companyId,
    });
  };

  return (
    <>
      <Input value={value} onChange={handleChange} onBlur={handleSave} />
      {isPending && <span>Loading...</span>}
    </>
  );
};

export default CustomCellEditor;
