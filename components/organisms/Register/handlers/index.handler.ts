import { useRouter } from 'next/router';

import { initializeApollo } from '@/gql/apollo';
import {
  SignUpUserDocument,
  SignUpUserMutation,
  SignUpUserMutationVariables,
} from '@/gql/auth.generated';
import { useStore } from '@/stores';

import { StatesType } from '../types/states';

const useHandlers = (states: StatesType) => {
  const { replace } = useRouter();
  const { authStore } = useStore();
  const { setTokens } = authStore;
  const { steps, setSteps, setError, setIsAlreadyRegistered } = states;
  const apolloClient = initializeApollo();

  const handleGotoNextStep = () => {
    setSteps(steps + 1);
  };

  const handleCreateUser = async ({
    email,
    name,
    password,
  }: RegisterFormFields) => {
    const { data, errors } = await apolloClient.mutate<
      SignUpUserMutation,
      SignUpUserMutationVariables
    >({
      mutation: SignUpUserDocument,
      errorPolicy: 'all',
      variables: {
        input: {
          email,
          password,
          userName: name,
        },
      },
    });
    if (!data || errors) {
      const invalidMessage = errors && errors[0].message;
      if (invalidMessage === 'User is already exists') {
        setError('password', { message: '이미 가입하신 회원입니다' });
        setIsAlreadyRegistered(true);
      }
      if (invalidMessage === 'User input invalidation') {
        setError('email', { message: '이메일을 확인해 주세요' });
        setSteps(1);
      }
      return;
    }
    return { ...data };
  };

  const onClickSubmit = async (data: RegisterFormFields) => {
    if (steps !== 2) {
      handleGotoNextStep();
      return;
    }
    const signUpResult = await handleCreateUser(data);
    if (!signUpResult) return;
    const {
      signUpUser: { accessToken, refreshToken },
    } = signUpResult;
    setTokens({
      access: accessToken,
      refresh: refreshToken,
    });
    replace('/');
  };

  return {
    onClickSubmit,
  };
};

export default useHandlers;
