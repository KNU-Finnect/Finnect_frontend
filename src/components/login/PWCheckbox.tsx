import styled from 'styled-components';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input,Typography } from 'antd';

const PWCheckbox = () => {
    return (
        <PWCheckboxWrapper>
            <Typography.Title level={5}>Password Check</Typography.Title>
            <Input.Password
                placeholder="input password"
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
        </PWCheckboxWrapper>
    );
}

export default PWCheckbox;

const PWCheckboxWrapper = styled.div`
`