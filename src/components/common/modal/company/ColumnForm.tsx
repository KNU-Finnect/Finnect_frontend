import { Form, Input, Select, Button, Checkbox } from 'antd';

import { usePostWCCol } from '@finnect/hooks/queries/company/usePostWCCol';
import { useGetCV } from '@finnect/hooks/queries/company/useGetCV';

const { Option } = Select;

const ColumnForm = () => {
  const [form] = Form.useForm();
  const { refetch } = useGetCV();
  const { mutate, isPending, isError, error } = usePostWCCol();

  const handleFinish = (values: {
    workspaceId: number;
    columnName: string;
    columnType: string;
    isHided: boolean;
  }) => {
    values.workspaceId = parseInt(
      localStorage.getItem('selectedWorkSpaceId') || '0'
    );

    mutate(values, {
      onSuccess: () => {
        refetch();
        form.resetFields();
      },
      onError: (error) => {
        console.error('Error adding column:', error);
      },
    });
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
        <Button type='primary' htmlType='submit' loading={isPending}>
          Add
        </Button>
        {isError && (
          <span style={{ color: 'red' }}>Error: {error?.message}</span>
        )}
      </Form.Item>
    </Form>
  );
};

export default ColumnForm;
