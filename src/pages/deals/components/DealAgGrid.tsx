import { PlusOutlined } from '@ant-design/icons';
import DealForm from '@finnect/components/common/modal/deals/DealForm';
import { Button, Modal } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';

const DealAgGrid = () => {
  const [isDealModalVisible, setIsDealModalVisible] = useState(false);

  const showDealModal = () => {
    setIsDealModalVisible(true);
  };

  const handleDealModalOk = () => {
    setIsDealModalVisible(false);
  };

  const handleDealModalCancel = () => {
    setIsDealModalVisible(false);
  };

  return (
    <DealAgGridWrapper>
      <ButtonWrapper>
        <Button
          type='primary'
          // onClick={showColumnModal}
          icon={<PlusOutlined />}
          style={{ marginRight: '12px' }}
        >
          속성 추가하기
        </Button>
        <Button type='primary' onClick={showDealModal} icon={<PlusOutlined />}>
          딜 추가하기
        </Button>
      </ButtonWrapper>
      <Modal
        title='딜 추가하기'
        open={isDealModalVisible}
        onOk={handleDealModalOk}
        onCancel={handleDealModalCancel}
        footer={null}
      >
        <DealForm />
      </Modal>
    </DealAgGridWrapper>
  );
};

export default DealAgGrid;

const DealAgGridWrapper = styled.div``;
const ButtonWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: flex-end;
`;
