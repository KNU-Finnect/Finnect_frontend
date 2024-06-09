import { Form, Input, Button, Select } from 'antd';

import { useSelectCompany } from '@finnect/hooks/custom-hooks/people/useSelectCompany';

import { IPeopleProps } from '@finnect/interface/PeopleInterface';

interface PeopleFormProps {
  onCreatePeople: (person: IPeopleProps) => void;
}

const PeopleForm = ({ onCreatePeople }: PeopleFormProps) => {
  const [formPeople] = Form.useForm();
  const { companies, isCompanySelected, setIsCompanySelected } =
    useSelectCompany();

  const handleFinish = (values: IPeopleProps) => {
    const companyId = formPeople.getFieldValue('companyId');
    onCreatePeople({ ...values, companyId });
    formPeople.resetFields();
    setIsCompanySelected(false);
  };

  const handleCompanyChange = (value: string) => {
    setIsCompanySelected(!!value);
  };

  return (
    <Form form={formPeople} onFinish={handleFinish}>
      <Form.Item
        name='companyId'
        label='Company'
        rules={[{ required: true, message: 'Please select a company!' }]}
      >
        <Select placeholder='Select a company' onChange={handleCompanyChange}>
          {companies.map((company) => (
            <Select.Option key={company.companyId} value={company.companyId}>
              {company.companyName}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name='personName'
        label='Nickname'
        rules={[{ required: true, message: 'Please input the nickname!' }]}
      >
        <Input disabled={!isCompanySelected} />
      </Form.Item>
      <Form.Item
        name='personRole'
        label='Role'
        rules={[{ required: true, message: 'Please select the role!' }]}
      >
        <Input disabled={!isCompanySelected} />
      </Form.Item>
      <Form.Item
        name='personEmail'
        label='Email'
        rules={[{ required: true, message: 'Please input the email!' }]}
      >
        <Input disabled={!isCompanySelected} />
      </Form.Item>
      <Form.Item
        name='personPhone'
        label='Phone'
        rules={[{ required: true, message: 'Please input the phone!' }]}
      >
        <Input disabled={!isCompanySelected} />
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit' disabled={!isCompanySelected}>
          Add
        </Button>
      </Form.Item>
    </Form>
  );
};

export default PeopleForm;
