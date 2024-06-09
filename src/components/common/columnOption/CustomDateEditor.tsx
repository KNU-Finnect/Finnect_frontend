import { useState } from 'react';
import { DatePicker } from 'antd';
import moment, { Moment } from 'moment';

import { usePWcpCellQ } from '@finnect/hooks/queries/colOption/usePWcpCellQ';
import { useGetCV } from '@finnect/hooks/queries/company/useGetCV';

const CustomDateEditor = (props: any) => {
  const { refetch } = useGetCV();
  const { mutate, isPending } = usePWcpCellQ(() => {
    refetch();
  });
  const [value, setValue] = useState<Moment | null>(moment(props.value)); // 초기값은 moment 또는 null로 설정

  const handleChange = (date: Moment | null) => {
    setValue(date); // 선택된 moment 객체나 null을 설정
  };

  const handleSave = async () => {
    if (value) {
      mutate({
        columnId: props.colDef.columnId,
        rowId: props.data.rowId,
        value: value.format('YYYY-MM-DD'),
      });
      refetch();
    }
  };

  return (
    <>
      <DatePicker
        value={value}
        onChange={handleChange}
        onBlur={handleSave}
        style={{ width: '100%' }}
      />
      {isPending && <span>Loading...</span>}
    </>
  );
};

export default CustomDateEditor;
