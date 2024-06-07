import { Tag } from 'antd';

import { ICVDetailDataProps } from '@finnect/interface/CompanyInterface';

import styled from 'styled-components';

const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 30px 0;
`;

const TypeWrapper = styled.div`
  width: 140px;
`;

const TypeText = styled.span`
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.explain};
`;

const CompanyColumnType = ({ cellData }: { cellData: ICVDetailDataProps }) => {
  const { result } = cellData;

  if (!result) {
    return null;
  }

  const { company, cells } = result;

  return (
    <div>
      <h2>속성 정보</h2>
      <TextWrapper>
        <TypeWrapper>
          <TypeText>companyName</TypeText>
        </TypeWrapper>
        <Tag color='magenta'> {company?.companyName}</Tag>
      </TextWrapper>
      <TextWrapper>
        <TypeWrapper>
          <TypeText>domain</TypeText>
        </TypeWrapper>
        <Tag color='green'> {company?.domain}</Tag>
      </TextWrapper>
      {cells?.map((cell) => (
        <div key={cell.columnId}>
          <TextWrapper>
            <TypeWrapper>
              <TypeText>{cell.columnName}</TypeText>
            </TypeWrapper>
            <Tag color='blue'>{cell.value}</Tag>
          </TextWrapper>
        </div>
      ))}
    </div>
  );
};

export default CompanyColumnType;
