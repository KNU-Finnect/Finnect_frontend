import React from 'react';

import { Input, Typography, Space } from 'antd';
import styled from 'styled-components';

interface NameboxProps {
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
}

const Namebox: React.FC<NameboxProps> = ({ setFirstName, setLastName }) => {
  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  return (
    <NameboxWrapper>
      <Typography.Title level={5}>Name</Typography.Title>
      <Space direction='horizontal'>
        <Input placeholder='first name' onChange={handleFirstNameChange} />
        <Input placeholder='last name' onChange={handleLastNameChange} />
      </Space>
    </NameboxWrapper>
  );
};

export default Namebox;

const NameboxWrapper = styled.div`
  margin-bottom: 0;
  position: relative;
`;
