import React, { useState } from 'react';
import { Button, Space } from 'antd';
import styled from 'styled-components';
import reactLogo from '@finnect/assets/react.svg';

import { authApi } from '@finnect/apis/auth/auth.api';
import IDbox from '@finnect/components/login/IDbox';
import PWbox from '@finnect/components/login/PWbox';

const SigninPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      await authApi(username, password);
      console.log('Login successful');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <SignInWrapper>
      <SignInContainer>
        <LogoWrapper>
          <figure className='Logo'>
            <img src={reactLogo} alt='logo' />
          </figure>
        </LogoWrapper>
        <InputWrapper>
          <IDbox setUsername={setUsername} />
          <PWbox password={password} onPasswordChange={handlePasswordChange} />
        </InputWrapper>
        <Space direction='vertical' style={{ width: '100%' }}>
          <Button
            type='primary'
            style={{ width: '100%' }}
            onClick={handleLogin}
          >
            로그인
          </Button>
          <Button style={{ width: '100%' }}>회원가입</Button>
        </Space>
      </SignInContainer>
    </SignInWrapper>
  );
};

export default SigninPage;

const SignInWrapper = styled.div`
  display: flex;
  padding: 2rem;
  align-items: center;
  justify-content: center;
`;

const InputWrapper = styled.div`
  margin-bottom: 1rem;
`;

const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 191px;
  }
`;
