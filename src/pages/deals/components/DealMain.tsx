import styled from 'styled-components';
import { IDealRow } from '@finnect/interface/DealInterface';
interface DealMainProps {
  deal: IDealRow;
}

const DealMain: React.FC<DealMainProps> = ({ deal }) => {
  return (
    <DealNoteWrapper>
      Main
      {deal.company}
      {deal.people}
      {deal.currency}
      {deal.date}
      {deal.select}
    </DealNoteWrapper>
  );
};

export default DealMain;

const DealNoteWrapper = styled.div``;
