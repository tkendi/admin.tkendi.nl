import { useSignInUserMutation } from '@/gql/auth.generated';
import { useStore } from '@/stores';

import { StatesType } from '../types/states';

const useHandlers = (states: StatesType) => {
  const { handleDisclosure } = states;

  const { authStore } = useStore();
  const { setTokens } = authStore;
  const [signInMutation] = useSignInUserMutation();

  const handleSubmitLogin = async (data: LoginFormFields) => {
    handleDisclosure();
    const { data: signInData } = await signInMutation({
      variables: {
        input: {
          ...data,
        },
      },
    });

    if (!signInData) return;
    const {
      signInUser: { accessToken, refreshToken },
    } = signInData;

    setTokens({
      access: accessToken,
      refresh: refreshToken,
    });
  };

  return {
    handleSubmitLogin,
  };
};

export default useHandlers;
