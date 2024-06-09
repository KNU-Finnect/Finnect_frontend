import { Tag } from 'antd';
import { ICVDetailDataProps } from '@finnect/interface/CompanyInterface';
import styled from 'styled-components';

const Container = styled.div`
  max-height: 460px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 15px;
`;

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

const tagColors = [
  'magenta',
  'red',
  'volcano',
  'orange',
  'gold',
  'lime',
  'green',
  'cyan',
  'blue',
  'geekblue',
  'purple',
];

const getRandomColor = () =>
  tagColors[Math.floor(Math.random() * tagColors.length)];

const CompanyColumnType = ({ cellData }: { cellData: ICVDetailDataProps }) => {
  const { result } = cellData;

  if (!result) {
    return null;
  }

  const { company, cells } = result;

  return (
    <div>
      <h2>속성 정보</h2>
      <Container>
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
              <Tag color={getRandomColor()}>{cell.value}</Tag>
            </TextWrapper>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default CompanyColumnType;
