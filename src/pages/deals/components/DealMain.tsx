import { IDealProps } from '@finnect/interface/DealInterface';
import { Tag } from 'antd';
import styled from 'styled-components';

interface DealMainProps {
  deal: IDealProps;
}

const DealMain: React.FC<DealMainProps> = ({ deal }) => {
  console.log('main deal', deal);

  const fixedFields = [
    { label: 'dealName', value: deal.dealName, color: 'magenta' },
    { label: 'companyName', value: deal.companyName, color: 'green' },
    { label: '책임자', value: deal.userName, color: 'blue' },
  ];

  const otherFields = Object.entries(deal).filter(
    ([key]) => !['dealName', 'companyName', 'userName'].includes(key)
  );

  return (
    <MainWrapper>
      <TitleWrapper>딜 정보</TitleWrapper>
      {fixedFields.map((field) => (
        <TextWrapper>
          <TypeWrapper key={field.label}>
            <TypeText>{field.label}</TypeText>
          </TypeWrapper>
          <Tag color={field.color}>{field.value}</Tag>
        </TextWrapper>
      ))}

      {otherFields.map(([key, value]) => (
        <TextWrapper>
          <TypeWrapper key={key}>
            <TypeText>{key}</TypeText>
          </TypeWrapper>
          <Tag color='blue'>{value}</Tag>
        </TextWrapper>
      ))}
    </MainWrapper>
  );
};

export default DealMain;

const MainWrapper = styled.div``;

const TitleWrapper = styled.h2``;

const TypeWrapper = styled.div`
  width: 140px;
  margin-bottom: 8px;
`;

const TypeText = styled.span`
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.explain};
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 30px 0;
`;
