import styled from 'styled-components';
interface DealMainProps {
  dealId: number;
}
const DealNote: React.FC<DealMainProps> = ({ dealId }) => {
  console.log('note deal', dealId);
  return <DealNoteWrapper>{dealId}</DealNoteWrapper>;
};

export default DealNote;

const DealNoteWrapper = styled.div``;
