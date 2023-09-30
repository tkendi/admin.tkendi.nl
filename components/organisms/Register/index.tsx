import { useRouter } from 'next/router';
import React from 'react';

import { REGISTER_INPUT_DATA } from './constants';
import handlers from './handlers/index.handler';
import useStates from './states/index.states';
import {
  Container,
  Progress,
  ProgressWrap,
  RegisterForm,
  RegisterInputWrap,
  RegisterWrap,
  SubmitButton,
  Wrap,
} from './styles/index.style';

import { Text } from '@/components/atoms/Text';
import Input from '@/components/molecules/Input';


const RegisterOrganism = () => {
  const { push } = useRouter();
  const states = useStates();
  const { isAlreadyRegistered, register, steps, handleSubmit, errors } = states;

  const { onClickSubmit } = handlers(states);

  return (
    <Container>
      <Wrap>
        <Text css={{ fontSize: '36px' }}>tkendi</Text>
        <RegisterWrap>
          <ProgressWrap>
            <Progress css={{ width: `calc(100px / ${3 - steps})` }} />
          </ProgressWrap>
          <RegisterForm onSubmit={handleSubmit(onClickSubmit)}>
            <RegisterInputWrap>
              {REGISTER_INPUT_DATA.map((v, index) => {
                const { name, type, placeholder, rules, title, subTitle } = v;
                return (
                  steps === index && (
                    <React.Fragment key={`${name}-step-${index}`}>
                      <Text css={{ fontSize: '18px', lineHeight: '28px' }}>
                        {title}
                      </Text>
                      <Text
                        css={{
                          fontSize: '18px',
                          lineHeight: '28px',
                          fontWeight: 700,
                        }}
                      >
                        {subTitle}
                      </Text>
                      <Input<RegisterFormFields>
                        name={name}
                        type={type}
                        placeholder={placeholder}
                        register={register}
                        labelInfo="개인정보 입력"
                        rules={rules}
                      />
                      {errors[name]?.message && (
                        <Text css={{ color: '$Danger600' }}>
                          {errors[name]?.message}
                        </Text>
                      )}
                    </React.Fragment>
                  )
                );
              })}
            </RegisterInputWrap>
            {!isAlreadyRegistered && (
              <SubmitButton type="submit">다음</SubmitButton>
            )}
            {isAlreadyRegistered && (
              <SubmitButton onClick={() => push('/login')}>
                로그인 하러 가기
              </SubmitButton>
            )}
          </RegisterForm>
        </RegisterWrap>
      </Wrap>
    </Container>
  );
};

export default RegisterOrganism;
