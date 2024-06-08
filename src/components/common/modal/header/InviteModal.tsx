import { Modal, Input, Button, message } from 'antd';
import { useRecoilState } from 'recoil';
import {
  emailState,
  invitedEmailsState,
} from '@finnect/atoms/header/useInviteModal';
import { postInviteMember } from '@finnect/apis/member/usePostMember';

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

  const handleInvite = async () => {
    try {
      await postInviteMember([email]);
      setInvitedEmails([...invitedEmails, email]);
      setEmail('');
      message.success('초대장이 성공적으로 전송되었습니다.');
      onClose();
    } catch (error) {
      message.error('초대장 전송에 실패했습니다. 다시 시도해 주세요.');
    }
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
