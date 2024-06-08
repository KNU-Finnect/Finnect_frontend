import { Form, Input, Select, Button, Checkbox } from 'antd';

const { Option } = Select;

const ColumnForm = () => {
  const [form] = Form.useForm();

  const handleFinish = (values: {
    workspaceId: number;
    columnName: 'string';
    columnType: 'string';
    isHided: boolean;
  }) => {
    values.workspaceId = parseInt(
      localStorage.getItem('selectedWorkSpaceId') || '0'
    );
    console.log(values);
    form.resetFields();
  };

  return (
    <Form form={form} onFinish={handleFinish}>
      <Form.Item
        name='columnName'
        label='Name'
        rules={[{ required: true, message: 'Please input the name!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name='columnType'
        label='Type'
        rules={[{ required: true, message: 'Please select the type!' }]}
      >
        <Select>
          <Option value='TEXT'>Text</Option>
          <Option value='NUMBER'>Number</Option>
          <Option value='DATE'>Date</Option>
          <Option value='STATUS'>Status</Option>
          <Option value='SELECT'>Select</Option>
          <Option value='CURRENCY'>Currency</Option>
          <Option value='RATING'>Rating</Option>
          <Option value='CHECKBOX'>Checkbox</Option>
          <Option value='URL'>URL</Option>
          <Option value='PERSON'>Person</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name='isHided'
        label='Hidden'
        valuePropName='checked'
        initialValue={false}
      >
        <Checkbox />
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
