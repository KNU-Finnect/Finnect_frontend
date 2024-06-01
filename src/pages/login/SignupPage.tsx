import React, { useState } from 'react';

import { Button, Space, message } from 'antd';
import styled from 'styled-components';

import IDCheckbox from '@finnect/components/login/IDCheckbox';
import Namebox from '@finnect/components/login/Namebox';
import PWCheckbox from '@finnect/components/login/PWCheckbox';
import PWbox from '@finnect/components/login/PWbox';

import reactLogo from '@finnect/assets/react.svg';

import { postSignup } from '@finnect/apis/signup/signup.api';
import { useNavigate } from 'react-router-dom';
import { authApi } from '@finnect/apis/auth/auth.api';

const SignupPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  const navigate = useNavigate();

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setIsPasswordMatch(e.target.value === passwordCheck);
  };

  const handlePasswordCheckChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setPasswordCheck(value);
    setIsPasswordMatch(value === password);
  };

  const handleSignup = async () => {
    if (!isPasswordMatch) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      const response = await postSignup(
        username,
        password,
        email,
        firstName,
        lastName
      );
      console.log('Signup successful:', response.data);
    } catch (error) {
      console.error('Signup failed:', error);
    }

    try {
      const response = await authApi(email, password);
      console.log('Signup successful:', response.data.status);
      if (response.data.status === 200) {
        navigate('/');
        message.success('회원가입 성공.');
      } else {
        message.error('회원가입 실패.');
      }
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  const handleHome = () => {
    navigate('/');
  };

  return (
    <SignupWrapper>
      <SignupContainer>
        <LogoWrapper>
          <figure className='Logo'>
            <img src={reactLogo} alt='logo' />
            {/* <figcaption>
              <img src={finnectSVG} alt='finnect' />
            </figcaption> */}
          </figure>
        </LogoWrapper>
        <InputWrapper>
          <Namebox setFirstName={setFirstName} setLastName={setLastName} />
          <PWbox password={password} onPasswordChange={handlePasswordChange} />
          <PWCheckbox
            passwordCheck={passwordCheck}
            onPasswordCheckChange={handlePasswordCheckChange}
            isPasswordMatch={isPasswordMatch}
          />
          <IDCheckbox setUsername={setUsername} setEmail={setEmail} />
        </InputWrapper>
        <Space direction='vertical' style={{ width: '100%' }}>
          <Button
            type='primary'
            style={{ width: '100%' }}
            onClick={handleSignup}
          >
            회원가입
          </Button>
          <Button style={{ width: '100%' }} onClick={handleHome}>
            메인페이지로 이동하기
          </Button>
        </Space>
      </SignupContainer>
    </SignupWrapper>
  );
};

export default SignupPage;

const SignupWrapper = styled.div`
  display: flex;
  padding: 2rem;
  align-items: center;
  justify-content: center;
`;

const InputWrapper = styled.div`
  margin-bottom: 1rem;
  width: 100%;
`;

const SignupContainer = styled.div`
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
