import { postDealColumnCreate } from '@finnect/apis/deal/useDeal';
import { Form, Input, Select, Button } from 'antd';

const { Option } = Select;

const DealColumnForm = ({ onAddSuccess }: { onAddSuccess: () => void }) => {
  const [form] = Form.useForm();

  const handleFinish = async (values: { name: string; type: string }) => {
    try {
      await postDealColumnCreate(values.name, values.type);
      onAddSuccess();
      form.resetFields();
    } catch (error) {
      console.log(error);
      console.log('error during post deal column create', error);
    }
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

export default DealColumnForm;