import styled from 'styled-components';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input,Typography } from 'antd';

const PWbox = () => {
    return (
        <PWboxWrapper>
            <Typography.Title level={5}>Password</Typography.Title>
            <Input.Password
                placeholder="input password"
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
        </PWboxWrapper>
    );
}

export default PWbox;

const PWboxWrapper = styled.div`
`