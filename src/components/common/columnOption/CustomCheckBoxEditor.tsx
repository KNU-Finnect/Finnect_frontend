import { useState } from 'react';
import { Checkbox } from 'antd';
import { usePWcpCellQ } from '@finnect/hooks/queries/colOption/usePWcpCellQ';
import { useGetCV } from '@finnect/hooks/queries/company/useGetCV';

import { CheckboxChangeEvent } from 'antd/es/checkbox';

const CustomCheckBoxEditor = (props: any) => {
  const { refetch } = useGetCV();
  const { mutate, isPending } = usePWcpCellQ(() => {
    refetch();
  });
  const [value, setValue] = useState(props.value);

  const handleChange = async (e: CheckboxChangeEvent) => {
    setValue(e.target.checked);
    await mutate({
      columnId: props.colDef.columnId,
      rowId: props.data.rowId,
      value,
    });
  };

  return (
    <>
      <Checkbox
        checked={value}
        onChange={handleChange}
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
      {isPending && <span>Loading...</span>}
    </>
  );
};

export default CustomCheckBoxEditor;
