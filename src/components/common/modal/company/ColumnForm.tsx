import { Form, Input, Select, Button } from 'antd';

const { Option } = Select;

const ColumnForm = ({
  onCreate,
}: {
  onCreate: (values: { name: string; type: string }) => void;
}) => {
  const [form] = Form.useForm();

  const handleFinish = (values: { name: string; type: string }) => {
    onCreate(values);
    form.resetFields();
  };

  return (
    <Form form={form} onFinish={handleFinish}>
      <Form.Item
        name='name'
        label='Name'
        rules={[{ required: true, message: 'Please input the name!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name='type'
        label='Type'
        rules={[{ required: true, message: 'Please select the type!' }]}
      >
        <Select>
          <Option value='text'>Text</Option>
          <Option value='number'>Number</Option>
          <Option value='date'>Date</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit'>
          Add
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ColumnForm;
