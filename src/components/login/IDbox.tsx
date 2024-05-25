import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Input, Typography } from 'antd';

const IDbox: React.FC = () => {
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
    <IdboxWrapper>
      <Typography.Title level={5}>E-mail</Typography.Title>
      <InputWrapper>
        <Input 
          placeholder='input e-mail' 
          value={email}
          onChange={handleChange}
        />
        {!isValidEmail && <ErrorMessage>잘못된 형식입니다.</ErrorMessage>}
      </InputWrapper>
    </IdboxWrapper>
  );
};

export default IDbox;

const IdboxWrapper = styled.div`
  margin-bottom: 0;
  position: relative;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const ErrorMessage = styled.div`
  color: red;
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 0.5rem;
  white-space: nowrap;
`;
