import IDbox from '@finnect/components/login/IDbox';
import PWbox from '@finnect/components/login/PWbox';
import styled from 'styled-components';
import reactLogo from '@finnect/assets/react.svg';
import { Button,Space } from 'antd';

const SigninPage = () => {
    return (
        <SignInWrapper>
            <SignInContainer>
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
                    <Button type="primary" style={{ width: '100%' }}>로그인</Button>   
                    <Button style={{ width: '100%' }}>회원가입</Button>
                </Space>
                
            </SignInContainer>
        </SignInWrapper>   
    )
}

export default SigninPage;

const SignInWrapper = styled.div`
    display: flex;
    padding: 2rem;
    align-items: center;
    justify-content: center;
`;

const InputWrapper = styled.div`
    margin-bottom:1rem;
`;

const SignInContainer = styled.div`
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