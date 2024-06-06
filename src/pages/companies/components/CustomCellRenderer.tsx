import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from 'react';

import styled from 'styled-components';
import { LuPanelLeftOpen } from 'react-icons/lu';
import { Button } from 'antd';

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

const CustomCellRenderer = (params: {
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

  return (
    <Container>
      <Value>{params.value}</Value>
      <StyledButton
        className='button'
        onClick={() => handleButtonClick(rowData)}
      >
        <Icon size={11.5} />
        보기
      </StyledButton>
    </Container>
  );
};

const handleButtonClick = (rowData: string) => {
  console.log('보기 버튼 클릭:', rowData);
  alert('보기 버튼 클릭:');
};

export default CustomCellRenderer;
