import React, { useState } from 'react';

import { Button, Space } from 'antd';
import styled from 'styled-components';

import IDCheckbox from '@finnect/components/login/IDCheckbox';
import Namebox from '@finnect/components/login/Namebox';
import PWCheckbox from '@finnect/components/login/PWCheckbox';
import PWbox from '@finnect/components/login/PWbox';

import reactLogo from '@finnect/assets/react.svg';

const SignupPage: React.FC = () => {
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);

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
          <Namebox />
          <PWbox password={password} onPasswordChange={handlePasswordChange} />
          <PWCheckbox
            passwordCheck={passwordCheck}
            onPasswordCheckChange={handlePasswordCheckChange}
            isPasswordMatch={isPasswordMatch}
          />
          <IDCheckbox />
        </InputWrapper>
        <Space direction='vertical' style={{ width: '100%' }}>
          <Button type='primary' style={{ width: '100%' }}>
            회원가입
          </Button>
          <Button style={{ width: '100%' }}>메인페이지로 이동하기</Button>
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
