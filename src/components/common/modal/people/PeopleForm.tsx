import { IPeopleProps } from '@finnect/interface/PeopleInterface';
import { Form, Input, Button } from 'antd';

interface PeopleFormProps {
  onCreatePeople: (person: IPeopleProps) => void;
}

const PeopleForm = ({ onCreatePeople }: PeopleFormProps) => {
  const [formPeople] = Form.useForm();

  const handleFinish = ({ nickname, role, phone }: IPeopleProps) => {
    onCreatePeople({ nickname, role, phone });
    formPeople.resetFields();
  };

  return (
    <Form form={formPeople} onFinish={handleFinish}>
      <Form.Item
        name='nickname'
        label='Nickname'
        rules={[{ required: true, message: 'Please input the nickname!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name='role'
        label='Role'
        rules={[{ required: true, message: 'Please select the role!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name='phone'
        label='Phone'
        rules={[{ required: true, message: 'Please input the phone!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit'>
          Add
        </Button>
      </Form.Item>
    </Form>
  );
};

export default PeopleForm;
