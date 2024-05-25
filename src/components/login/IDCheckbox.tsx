import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Input, Typography, Space, Button } from 'antd';

const IDCheckbox: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  useEffect(() => {
    if (email === '') {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(validateEmail(email));
    }
  }, [email]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <IdCheckboxWrapper>
      <Typography.Title level={5}>E-mail</Typography.Title>
      <InputWrapper>
        <Space direction="vertical" style={{ width: '100%' }}>
          <EmailInputWrapper>
            <Input 
              style={{ width: '100%' }}
              placeholder='input e-mail' 
              value={email}
              onChange={handleChange}
            />
            <Button type="primary" style={{ marginLeft: '8px' }}>인증</Button>
          </EmailInputWrapper>
          {!isValidEmail && <ErrorMessage>잘못된 형식입니다.</ErrorMessage>}
          <CheckInputWrapper>
              <Input placeholder='인증번호' style={{ width: '100%' }}/>
              <Button type="primary" style={{ marginLeft: '8px' }}>확인</Button>
          </CheckInputWrapper>
        </Space>  
      </InputWrapper>
    </IdCheckboxWrapper>
  );
};

export default IDCheckbox;

const IdCheckboxWrapper = styled.div`
  margin-bottom: 0;
  position: relative;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const EmailInputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const CheckInputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const ErrorMessage = styled.div`
  color: red;
  position: relative;
  top: 100%;
  left: 0;
  margin-top: 0.5rem;
  white-space: nowrap;
`;
