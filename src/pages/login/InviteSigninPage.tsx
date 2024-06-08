import React, { useState } from 'react';
import { Button, Space, message } from 'antd';
import styled from 'styled-components';
import reactLogo from '@finnect/assets/react.svg';
import { authApi } from '@finnect/apis/auth/auth.api';
import IDbox from '@finnect/components/login/IDbox';
import PWbox from '@finnect/components/login/PWbox';
import { useNavigate, useParams } from 'react-router-dom';
import { postAddMember } from '@finnect/apis/member/usePostMember';

const InviteSigninPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { workspaceId: workspaceIdParam, workspaceName: encodedWorkspaceName } =
    useParams();

  const workspaceId = workspaceIdParam ? parseInt(workspaceIdParam, 10) : null;
  const workspaceName = encodedWorkspaceName
    ? decodeURIComponent(encodedWorkspaceName)
    : '';

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    if (workspaceId === null) {
      return message.error('유효하지 않은 워크스페이스 ID입니다.');
    }

    try {
      const response = await authApi(username, password);
      const response2 = await postAddMember(workspaceId);
      console.log('Login response:', response);
      if (response.status === 200 && response2.status === 200) {
        localStorage.setItem('personalName', response.personalName);

        console.log('Login successful');

        localStorage.setItem('selectedWorkSpace', workspaceName as string);
        localStorage.setItem('selectedWorkSpaceId', workspaceIdParam as string);

        navigate('/');
        return message.success('로그인 및 초대 성공.');
      } else {
        message.error('로그인 실패: 아이디 또는 비밀번호를 확인해주세요.');
      }
    } catch (error) {
      console.error('Login failed:', error);
      message.error('로그인 실패: 아이디 또는 비밀번호를 확인해주세요.');
    }
  };

  const handleEnterPress = () => {
    handleLogin();
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
          <PWbox
            password={password}
            onPasswordChange={handlePasswordChange}
            onEnterPress={handleEnterPress}
          />
        </InputWrapper>
        <Space direction='vertical' style={{ width: '100%' }}>
          <Button
            type='primary'
            style={{ width: '100%' }}
            onClick={handleLogin}
          >
            로그인
          </Button>
        </Space>
      </SignInContainer>
    </SignInWrapper>
  );
};

export default InviteSigninPage;

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
