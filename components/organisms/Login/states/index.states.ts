import { useForm } from 'react-hook-form';

import useDisclosure from '@/hooks/useDisclosure';

const useStates = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginFormFields>();

  const {
    disclosure,
    handleDisclosure,
    handleOffDisclosure,
    handleOnDisclosure,
  } = useDisclosure();

  const getter = {
    errors,
    disclosure,
  };

  const setter = {
    register,
    handleSubmit,
    setError,
    handleDisclosure,
    handleOffDisclosure,
    handleOnDisclosure,
  };

  return {
    ...getter,
    ...setter,
  };
};

export default useStates;
