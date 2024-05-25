import styled from 'styled-components';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input,Typography, Space,Button } from 'antd';

const Namebox = () => {
    return (
        <NameboxWrapper>
            <Typography.Title level={5}>Name</Typography.Title>
            <Space direction="colum">
                <Input placeholder="first name"/>
                <Input placeholder="last name"/>
            </Space>
        </NameboxWrapper>
    );
}

export default Namebox;

const NameboxWrapper = styled.div`
    margin-bottom: 0;
    position: relative;
`