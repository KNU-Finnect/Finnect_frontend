import styled from 'styled-components';
import DealAgGrid from './components/DealAgGrid';

const DealsBox = () => {
  return (
    <DealWrapper>
      <DealHeader>dealheader</DealHeader>
      <DealBody>
        <DealAgGrid />
      </DealBody>
    </DealWrapper>
  );
};

export default DealsBox;

const DealWrapper = styled.div``;

const DealHeader = styled.div``;

const DealBody = styled.div``;
