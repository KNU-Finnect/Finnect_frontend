import { IDealProps } from '@finnect/interface/DealInterface';
import { Col, Row, Statistic } from 'antd';

interface DealMainProps {
  deal: IDealProps;
}

const DealMain: React.FC<DealMainProps> = ({ deal }) => {
  return (
    <>
      {Object.entries(deal).map(([key, value]) => (
        <Row gutter={16} key={key}>
          <Col span={12}>
            <Statistic title={key} value={value} />
          </Col>
        </Row>
      ))}
    </>
  );
};

export default DealMain;
