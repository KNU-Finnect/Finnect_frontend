import { useState } from 'react';

import { DatePicker } from 'antd';
import dayjs from 'dayjs';

import { usePWcpCellQ } from '@finnect/hooks/queries/company/usePWcpCellQ';
import { useGetCV } from '@finnect/hooks/queries/company/useGetCV';

const CustomDateEditor = (props: any) => {
  const { refetch } = useGetCV();
  const { mutate, isPending } = usePWcpCellQ(() => {
    refetch();
  });
  const [value, setValue] = useState(dayjs(props.value));
  const handleChange = (date: any) => {
    setValue(dayjs(date));
  };

  const handleSave = async () => {
    await mutate({
      columnId: props.colDef.columnId,
      rowId: props.data.rowId,
      value: value.format('YYYY-MM-DD'),
      companyId: props.data.companyId,
    });
    refetch();
  };

  return (
    <>
      <DatePicker
        value={value.toDate()}
        onChange={handleChange}
        onBlur={handleSave}
      />
      {isPending && <span>Loading...</span>}
    </>
  );
};

export default CustomDateEditor;
