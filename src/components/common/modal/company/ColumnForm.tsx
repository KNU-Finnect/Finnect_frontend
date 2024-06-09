import { Form, Input, Select, Button, Checkbox } from 'antd';

import { usePostWCCol } from '@finnect/hooks/queries/company/usePostWCCol';
import { useGetCV } from '@finnect/hooks/queries/company/useGetCV';
import { useGetColQ } from '@finnect/hooks/queries/colOption/useGetColQ';

import { useCompanyModal } from '@finnect/hooks/custom-hooks/company/useCompanyModal';

const { Option } = Select;

const ColumnForm = () => {
  const [form] = Form.useForm();
  const { refetch } = useGetCV();
  const { data } = useGetColQ();
  const { mutate, isPending, isError, error } = usePostWCCol();
  const { hideColumnModal } = useCompanyModal();

  const handleFinish = (values: {
    workspaceId: number;
    columnName: string;
    columnType: string;
    isHided: boolean;
  }) => {
    // console.log('values:', values);
    mutate(values, {
      onSuccess: () => {
        refetch();
        form.resetFields();
        hideColumnModal();
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
          {data?.result.map((col) => (
            <Option key={col.type} value={col.type}>
              {col.type}
            </Option>
          ))}
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
