import { forwardRef, useImperativeHandle, useState } from 'react';
import { Select } from 'antd';

const { Option } = Select;

const DealCompanyEditor = forwardRef((props: any, ref) => {
  const [value, setValue] = useState(props.value);

  useImperativeHandle(ref, () => ({
    getValue: () => value,
  }));

  const handleChange = (value: string) => {
    setValue(value);
  };

  return (
    <Select value={value} onChange={handleChange} style={{ width: '100%' }}>
      {props.companies.map((company: any) => (
        <Option key={company.companyId} value={company.companyId}>
          {company.companyName}
        </Option>
      ))}
    </Select>
  );
});

export default DealCompanyEditor;
