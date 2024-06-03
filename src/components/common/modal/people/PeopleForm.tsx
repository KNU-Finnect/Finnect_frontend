import { Form, Input, Button } from 'antd';

import { IPeopleProps } from '@finnect/interface/PeopleInterface';

interface PeopleFormProps {
  onCreatePeople: (person: IPeopleProps) => void;
}

const PeopleForm = ({ onCreatePeople }: PeopleFormProps) => {
  const [formPeople] = Form.useForm();

  const handleFinish = ({
    personName,
    personRole,
    personEmail,
    personPhone,
  }: IPeopleProps) => {
    onCreatePeople({ personName, personRole, personEmail, personPhone });
    formPeople.resetFields();
  };

  return (
    <Form form={formPeople} onFinish={handleFinish}>
      <Form.Item
        name='personName'
        label='Nickname'
        rules={[{ required: true, message: 'Please input the nickname!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name='personRole'
        label='Role'
        rules={[{ required: true, message: 'Please select the role!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name='personEmail'
        label='Email'
        rules={[{ required: true, message: 'Please input the email!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name='personPhone'
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
