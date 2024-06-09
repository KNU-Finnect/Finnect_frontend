// DealCustomCell 컴포넌트
const DealCustomCell = ({
  rowId,
  data,
  columnName,
}: {
  rowId: number;
  data: any[];
  columnName: string;
}) => {
  // rowId를 사용하여 해당 row의 데이터 가져오기
  const rowData = data.find((row: any) => row.rowId === rowId);

  // rowData를 기반으로 셀에 표시할 데이터 가져오기
  const cellData = rowData ? rowData[columnName] : '';

  return <div>{cellData}</div>;
};

export default DealCustomCell;
