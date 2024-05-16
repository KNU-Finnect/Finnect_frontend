import { Form, Input, Select, Button } from 'antd';

const { Option } = Select;

const CompanyForm = ({ onCreateCompany }) => {
  const [formCompany] = Form.useForm();

  const handleFinish = (values) => {
    onCreateCompany(values);
    form.resetFields();
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
