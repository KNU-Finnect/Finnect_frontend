import React, { useState } from 'react';
import { Button, Space, message } from 'antd';
import styled from 'styled-components';
import reactLogo from '@finnect/assets/react.svg';

import { authApi } from '@finnect/apis/auth/auth.api';
import IDbox from '@finnect/components/login/IDbox';
import PWbox from '@finnect/components/login/PWbox';
import { useNavigate } from 'react-router-dom';

const SigninPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await authApi(username, password);
      console.log('Login response:', response);
      if (response == 200) {
        console.log('Login successful');
        navigate('/');
        message.error('로그인 성공.');
      } else {
        message.error('로그인 실패: 아이디 또는 비밀번호를 확인해주세요.');
      }
    } catch (error) {
      console.error('Login failed:', error);
      message.error('로그인 실패: 서버 오류가 발생했습니다.');
    }
  };

  const handleSignup = () => {
    navigate('/signup');
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
          <Button style={{ width: '100%' }} onClick={handleSignup}>
            회원가입
          </Button>
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
