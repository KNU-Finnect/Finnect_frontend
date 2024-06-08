import { useState } from 'react';
import { Modal, Tabs } from 'antd';

import DealMain from './DealMain';
import DealNote from './DealNote';
import DealActivity from './DealActivity';
import { IDealProps } from '@finnect/interface/DealInterface';

interface DealDetailModalProps {
  visible: boolean;
  onClose: () => void;
  deal: IDealProps;
}

const DealDetailModal: React.FC<DealDetailModalProps> = ({
  visible,
  onClose,
  deal,
}) => {
  const [activeTab, setActiveTab] = useState('main');

  const items = [
    {
      key: 'main',
      label: 'Main',
      children: <DealMain deal={deal} />,
    },
    {
      key: 'note',
      label: 'Note',
      children: <DealNote />,
    },
    {
      key: 'activity',
      label: 'Activity',
      children: <DealActivity />,
    },
  ];

  return (
    <Modal
      title={deal.dealName}
      open={visible}
      onOk={onClose}
      onCancel={onClose}
      width={1024}
      styles={{ body: { height: '620px' } }}
      footer={null}
    >
      <Tabs
        defaultActiveKey='main'
        activeKey={activeTab}
        onChange={setActiveTab}
        items={items}
      />
    </Modal>
  );
};

export default DealDetailModal;