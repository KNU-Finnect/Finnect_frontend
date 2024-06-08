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

import CompanyRDModal from '@finnect/pages/companies/components/CompanyRDModal';

import { useGetCVD } from '@finnect/hooks/queries/company/useGetCVD';
import { useGetCVP } from '@finnect/hooks/queries/company/useGetCVP';

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

  const [isModalVisible, setIsModalVisible] = useState(false);
  const { refetch: getViewData } = useGetCVD(rowData.companyId);
  const { refetch: getPeopleData } = useGetCVP(rowData.companyId);

  const handleButtonClick = () => {
    getViewData();
    getPeopleData();
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <Container>
      <Value>{params.value}</Value>
      <StyledButton className='button' onClick={() => handleButtonClick()}>
        <Icon size={11.5} />
        보기
      </StyledButton>
      <CompanyRDModal
        visible={isModalVisible}
        onClose={handleModalClose}
        rowData={rowData}
      />
    </Container>
  );
};

export default CustomCellRenderer;
