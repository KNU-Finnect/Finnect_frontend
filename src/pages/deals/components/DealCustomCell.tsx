import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  useState,
} from 'react';

import styled from 'styled-components';
import { LuPanelLeftOpen } from 'react-icons/lu';
import { Button } from 'antd';
import DealDetailModal from './DealDetialModal';

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  &:hover .button {
    display: inline-block;
  }
`;

const Value = styled.span`
  flex: 1;
`;

const StyledButton = styled(Button)`
  display: none;
  font-size: ${(props) => props.theme.fontSizes.xs};
  padding: 0px 10px;
`;

const Icon = styled(LuPanelLeftOpen)`
  margin-right: 4px;
`;

const DealCustomCell = (params: {
  data: any;
  value:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | null
    | undefined;
}) => {
  const rowData = params.data;

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleButtonClick = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <Container>
      <Value>{params.value}</Value>
      <StyledButton className='button' onClick={handleButtonClick}>
        <Icon size={11.5} />
        더보기
      </StyledButton>
      <DealDetailModal
        visible={isModalVisible}
        onClose={handleModalClose}
        deal={rowData}
      />
    </Container>
  );
};

export default DealCustomCell;
