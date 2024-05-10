import { Modal, Input, Button, List } from 'antd';
import { useRecoilState } from 'recoil';

import {
  emailState,
  invitedEmailsState,
} from '@finnect/atoms/header/useInviteModal';

const InviteModal = ({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) => {
  const [email, setEmail] = useRecoilState<string>(emailState);
  const [invitedEmails, setInvitedEmails] =
    useRecoilState<string[]>(invitedEmailsState);

  const handleInvite = () => {
    // console.log('초대하기:', email);
    setInvitedEmails([...invitedEmails, email]);
    setEmail('');
  };

  return (
    <Modal
      title='초대하기'
      visible={visible}
      onCancel={onClose}
      footer={[
        <Button key='cancel' onClick={onClose}>
          취소
        </Button>,
        <Button key='invite' type='primary' onClick={handleInvite}>
          초대하기
        </Button>,
      ]}
    >
      <Input
        placeholder='이메일 주소 입력'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
        <List
          style={{ marginTop: '16px' }}
          header={<div>초대된 이메일 목록</div>}
          bordered
          dataSource={invitedEmails}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </div>
    </Modal>
  );
};

export default InviteModal;
