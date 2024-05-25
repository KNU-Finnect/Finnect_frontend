import styled from 'styled-components';
import { Input,Typography } from 'antd';

const IDbox = () => {
    return (
        <IdboxWrapper>
            <Typography.Title level={5}>E-mail</Typography.Title>
            <Input placeholder='input id'/>
        </IdboxWrapper>
    );
}

export default IDbox;

const IdboxWrapper = styled.div`
    margin-bottom: 0;
`