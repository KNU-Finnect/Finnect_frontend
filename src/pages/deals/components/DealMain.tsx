import { IDealProps } from '@finnect/interface/DealInterface';
import { Col, Row, Statistic } from 'antd';
interface DealMainProps {
  deal: IDealProps;
}

const DealMain: React.FC<DealMainProps> = ({ deal }) => {
  return (
    <>
      <Row gutter={16}>
        <Col span={12}>
          <Statistic title='Company Name' value={deal.companyId} />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Statistic title='User' value={deal.userId} />
        </Col>
      </Row>
    </>
  );
};

export default DealMain;
