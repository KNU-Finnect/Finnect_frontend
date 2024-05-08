import styled from 'styled-components';

const IDbox = () => {
    return (
        <IdboxWrapper>
            <IdInput type="text" placeholder="아이디를 입력해주세요" />
        </IdboxWrapper>
    );
}

export default IDbox;

const IdboxWrapper = styled.div`
    width: 100px;
    height: 30px;
`

const IdInput = styled.input`

`