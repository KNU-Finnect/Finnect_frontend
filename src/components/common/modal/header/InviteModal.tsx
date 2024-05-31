import { Modal, Input, Button } from 'antd';
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
    setInvitedEmails([...invitedEmails, email]);
    setEmail('');
  };

  return (
    <Modal
      title='초대하기'
      open={visible}
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
    </Modal>
  );
};

export default InviteModal;
