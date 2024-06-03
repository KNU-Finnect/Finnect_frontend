import { Form, Input, Button, Select } from 'antd';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import {
  companiesState,
  isCompanySelectedState,
} from '@finnect/atoms/company/useSelectCompany'; // 경로를 맞게 변경하세요
import { IPeopleProps } from '@finnect/interface/PeopleInterface';
import { useGetWC } from '@finnect/hooks/queries/company/useGetWC';
import { ICompanyAxiosProps } from '@finnect/interface/PeopleInterface';

interface PeopleFormProps {
  onCreatePeople: (person: IPeopleProps) => void;
}

const PeopleForm = ({ onCreatePeople }: PeopleFormProps) => {
  const [formPeople] = Form.useForm();
  const { data: CompanyData } = useGetWC();

  const [companies, setCompanies] = useRecoilState(companiesState);
  const [isCompanySelected, setIsCompanySelected] = useRecoilState(
    isCompanySelectedState
  );

  useEffect(() => {
    if (CompanyData) {
      setCompanies(CompanyData.result.companies);
    }
  }, [CompanyData, setCompanies]);

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
          {companies.map((company: ICompanyAxiosProps) => (
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
