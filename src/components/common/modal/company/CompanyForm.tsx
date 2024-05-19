import { Form, Input, Button } from 'antd';

const CompanyForm = ({
  onCreateCompany,
}: {
  onCreateCompany: (values: { name: string; domain: string }) => void;
}) => {
  const [formCompany] = Form.useForm();

  const handleFinish = (values: { name: string; domain: string }) => {
    onCreateCompany(values);
    formCompany.resetFields();
  };

  return (
    <Form form={formCompany} onFinish={handleFinish}>
      <Form.Item
        name='name'
        label='Name'
        rules={[{ required: true, message: 'Please input the company!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name='domain'
        label='Domain'
        rules={[{ required: true, message: 'Please select the domain!' }]}
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

export default CompanyForm;
