import React from 'react';

import { Input, Typography } from 'antd';
import styled from 'styled-components';

import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

interface PWCheckboxProps {
  passwordCheck: string;
  onPasswordCheckChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isPasswordMatch: boolean;
}

const PWCheckbox: React.FC<PWCheckboxProps> = ({
  passwordCheck,
  onPasswordCheckChange,
  isPasswordMatch,
}) => {
  return (
    <PWCheckboxWrapper>
      <Typography.Title level={5}>Password Check</Typography.Title>
      <InputWrapper>
        <Input.Password
          value={passwordCheck}
          onChange={onPasswordCheckChange}
          placeholder='input password'
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
        {!isPasswordMatch && (
          <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
        )}
      </InputWrapper>
    </PWCheckboxWrapper>
  );
};

export default PWCheckbox;

const PWCheckboxWrapper = styled.div`
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
