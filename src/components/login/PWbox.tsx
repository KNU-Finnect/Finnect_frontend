import React from 'react';
import { Input, Typography } from 'antd';
import styled from 'styled-components';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

interface PWboxProps {
  password: string;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEnterPress: () => void;
}

const PWbox: React.FC<PWboxProps> = ({
  password,
  onPasswordChange,
  onEnterPress,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onEnterPress();
    }
  };

  return (
    <PWboxWrapper>
      <Typography.Title level={5}>Password</Typography.Title>
      <Input.Password
        value={password}
        onChange={onPasswordChange}
        onKeyDown={handleKeyDown}
        placeholder='input password'
        iconRender={(visible) =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
      />
    </PWboxWrapper>
  );
};

export default PWbox;

const PWboxWrapper = styled.div`
  margin-bottom: 0;
  position: relative;
`;
