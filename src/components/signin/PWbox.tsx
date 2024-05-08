import styled from 'styled-components';

const PWbox = () => {
    return (
        <PWboxWrapper>
            <PWInput type="password" placeholder="비밀번호를 입력해주세요" />
        </PWboxWrapper>
    );
}

export default PWbox;

const PWboxWrapper = styled.div`
    width: 100px;
    height: 30px;
`

const PWInput = styled.input`

`