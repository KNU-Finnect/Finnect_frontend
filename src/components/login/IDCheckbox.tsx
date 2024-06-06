import React, { useState, useEffect } from 'react';
import { Input, Typography, Space, Button, message } from 'antd';
import styled from 'styled-components';
import { checkEmail, checkEmailCode } from '@finnect/apis/signup/signup.api';

interface IDCheckboxProps {
  setUsername: (username: string) => void;
  setEmail: (email: string) => void;
}

const IDCheckbox: React.FC<IDCheckboxProps> = ({ setUsername, setEmail }) => {
  const [email, setEmailState] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [emailCode, setEmailCode] = useState('');
  const [, setIsCodeValid] = useState(false);
  const [isCodeChecked, setIsCodeChecked] = useState(false);

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
    const value = e.target.value;
    setEmailState(value);
    setEmail(value);

    setUsername(value);
  };

  const handleEmailCheck = async () => {
    try {
      const response = await checkEmail(email);
      console.log('Email check response:', response);
      setIsEmailSent(true);
    } catch (error) {
      console.error('Error during email check:', error);
      throw error;
    }
  };

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailCode(e.target.value);
  };

  const handleCodeCheck = async () => {
    const codeNumber = parseInt(emailCode);
    try {
      const response = await checkEmailCode(email, codeNumber);
      console.log('Code check response:', response);
      setIsCodeValid(true);
      setIsCodeChecked(true);
      message.success('이메일 인증이 완료되었습니다.');
    } catch (error) {
      console.error('Error during email code check:', error);
      setIsCodeValid(false);
      setIsCodeChecked(false);
      message.error('이메일 인증에 실패했습니다. 다시 시도해주세요.');
      throw error;
    }
  };

  return (
    <IdCheckboxWrapper>
      <Typography.Title level={5}>E-mail</Typography.Title>
      <InputWrapper>
        <Space direction='vertical' style={{ width: '100%' }}>
          <EmailInputWrapper>
            <Input
              style={{ width: '100%' }}
              placeholder='input e-mail'
              value={email}
              onChange={handleChange}
            />
            <Button
              type='primary'
              style={{ marginLeft: '8px' }}
              onClick={handleEmailCheck}
              disabled={!isValidEmail || email === ''}
            >
              인증
            </Button>
          </EmailInputWrapper>
          {!isValidEmail && <ErrorMessage>잘못된 형식입니다.</ErrorMessage>}
          {isEmailSent && (
            <SuccessMessage>인증번호가 발송되었습니다.</SuccessMessage>
          )}
          <CheckInputWrapper>
            <Input
              placeholder='인증번호'
              style={{ width: '100%' }}
              value={emailCode}
              onChange={handleCodeChange}
              disabled={!isEmailSent}
            />
            <Button
              type='primary'
              style={{ marginLeft: '8px' }}
              onClick={handleCodeCheck}
              disabled={!isEmailSent || emailCode === ''}
            >
              확인
            </Button>
          </CheckInputWrapper>
          {isCodeChecked && <SuccessMessage>인증되었습니다.</SuccessMessage>}{' '}
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

const SuccessMessage = styled.div`
  color: green;
  position: relative;
  top: 100%;
  left: 0;
  margin-top: 0.5rem;
  white-space: nowrap;
`;
