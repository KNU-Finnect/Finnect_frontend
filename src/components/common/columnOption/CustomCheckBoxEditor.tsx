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
    const newValue = e.target.checked ? 'true' : 'false';
    setValue(newValue);
    mutate({
      columnId: props.colDef.columnId,
      rowId: props.data.rowId,
      value: newValue,
    });
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Checkbox checked={value === 'true'} onChange={handleChange} />
      {isPending && <span>Loading...</span>}
    </div>
  );
};

export default CustomCheckBoxEditor;
