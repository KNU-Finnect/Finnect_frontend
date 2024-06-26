import { Form, Input, Button, Select } from 'antd';
import styled from 'styled-components';
import { postDealCreate } from '@finnect/apis/deal/useDeal';
import { useSelectCompany } from '@finnect/hooks/custom-hooks/people/useSelectCompany';

const DealForm = ({ onAddSuccess }: { onAddSuccess: () => void }) => {
  const { companies } = useSelectCompany();
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    try {
      await postDealCreate(values.name, values.company);
      onAddSuccess();
    } catch (error) {
      console.error('Error during post deal create:', error);
    }
  };

  return (
    <DealFormWrapper>
      <FormWrapper>
        <Form form={form} onFinish={onFinish}>
          <Form.Item
            label='거래 회사 선택'
            name='company'
            rules={[{ required: true, message: '회사를 선택해주세요.' }]}
          >
            <Select placeholder='회사를 선택하세요'>
              {companies.map((company) => (
                <Select.Option
                  key={company.companyId}
                  value={company.companyId}
                >
                  {company.companyName}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label='거래명'
            name='name'
            rules={[{ required: true, message: '딜 이름을 입력해주세요.' }]}
          >
            <Input placeholder='딜 이름을 입력해주세요.' />
          </Form.Item>
          <Form.Item
            label='책임자'
            name='user'
            rules={[{ required: true, message: '책임자를 입력해주세요.' }]}
          >
            <Input placeholder='책임자를 입력해주세요.' />
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit'>
              Add
            </Button>
          </Form.Item>
        </Form>
      </FormWrapper>
    </DealFormWrapper>
  );
};

export default DealForm;

const DealFormWrapper = styled.div``;
const FormWrapper = styled.div``;
