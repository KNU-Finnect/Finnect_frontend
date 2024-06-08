import { useState } from 'react';
import { Rate } from 'antd'; // Rate 컴포넌트 임포트
import { usePWcpCellQ } from '@finnect/hooks/queries/colOption/usePWcpCellQ';
import { useGetCV } from '@finnect/hooks/queries/company/useGetCV';

const CustomRatingEditor = (props: any) => {
  const { refetch } = useGetCV();

  const { mutate, isPending } = usePWcpCellQ(() => {
    refetch();
  });

  const [value, setValue] = useState(props.value);

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  const handleSave = async () => {
    await mutate({
      columnId: props.colDef.columnId,
      rowId: props.data.rowId,
      value,
    });
  };

  return (
    <>
      <Rate
        value={value}
        onChange={handleChange}
        onBlur={handleSave}
        allowHalf
      />
      {isPending && <span>Loading...</span>}
    </>
  );
};

export default CustomRatingEditor;
