import IDbox from '@finnect/components/signin/IDbox';
import PWbox from '@finnect/components/signin/PWbox';
import styled from 'styled-components';
import reactLogo from '@finnect/assets/react.svg';
import { Button,Space } from 'antd';

const SignupPage = () => {
    return (
        <SignupWrapper>
            <SignupContainer>
                <LogoWrapper>
                <figure className='Logo'>
                    <img src={reactLogo} alt='logo' />
                    {/* <figcaption>
                        <img src={finnectSVG} alt='finnect' />
                    </figcaption> */}
                </figure>
                </LogoWrapper>
                <InputWrapper>
                    <IDbox />
                    <PWbox/>
                </InputWrapper>
                <Space direction="vertical" style={{ width: '100%' }}>
                    <Button type="primary" style={{ width: '100%' }}>회원가입</Button>   
                    <Button style={{ width: '100%' }}>메인페이지로 이동하기</Button>
                </Space>
                
            </SignupContainer>
        </SignupWrapper>   
    )
}

export default SignupPage;

const SignupWrapper = styled.div`
    display: flex;
    padding: 2rem;
    align-items: center;
    justify-content: center;
`;

const InputWrapper = styled.div`
    margin-bottom:1rem;
`;

const SignupContainer = styled.div`
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