import React from 'react';

import { Text } from '@/components/atoms/Text';
import Input from '@/components/molecules/Input';
import Loading from '@/components/atoms/Loading';

import {
  ConfirmButtonWrap,
  Container,
  ErrorMsgWrap,
  LoginButton,
  LoginForm,
  LoginInputWrap,
  LoginSelectTextWrap,
  LoginWrap,
  Wrap,
} from './styles/index.style';
import { emailPattern } from '../../atoms/constants/validations';
import useHandlers from './handlers/index.handler';
import useStates from './states/index.states';

const LoginOrganism = () => {
  const states = useStates();
  const { disclosure, errors, register, handleSubmit } = states;
  const { handleSubmitLogin } = useHandlers(states);

  return (
    <Container>
      <Wrap>
        <Text css={{ fontSize: '36px' }}>tkendi</Text>
        <LoginWrap>
          <LoginForm onSubmit={handleSubmit(handleSubmitLogin)}>
            <LoginInputWrap>
              <Input<LoginFormFields>
                name="email"
                type="text"
                placeholder="이메일"
                register={register}
                labelInfo="개인정보 입력"
                rules={{
                  required: '이메일을 확인해 주세요',
                  pattern: emailPattern,
                }}
              />
              <Input<LoginFormFields>
                name="password"
                type="password"
                placeholder="비밀번호"
                labelInfo="비밀번호 입력"
                register={register}
                rules={{
                  required: '비밀번호를 확인해 주세요',
                }}
              />
              <ErrorMsgWrap>
                {(errors?.email || errors?.password) && (
                  <Text css={{ color: '$Danger500' }}>
                    이메일 또는 비밀번호를 확인해 주세요
                  </Text>
                )}
              </ErrorMsgWrap>
            </LoginInputWrap>
            <ConfirmButtonWrap>
              <LoginButton disabled={disclosure} type="submit">
                {disclosure && <Loading />}
                {!disclosure && <Text>로그인</Text>}
              </LoginButton>
              <LoginSelectTextWrap>
                <Text>또는</Text>
              </LoginSelectTextWrap>
              <LoginButton>
                <Text>회원가입</Text>
              </LoginButton>
            </ConfirmButtonWrap>
          </LoginForm>
        </LoginWrap>
      </Wrap>
    </Container>
  );
};

export default LoginOrganism;
