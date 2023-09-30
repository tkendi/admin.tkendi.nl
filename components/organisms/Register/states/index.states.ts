import { useState } from 'react';
import { useForm } from 'react-hook-form';

import useDisclosure from '@/hooks/useDisclosure';

const useStates = () => {
  const [steps, setSteps] = useState(0);
  const [isAlreadyRegistered, setIsAlreadyRegistered] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<RegisterFormFields>();

  const {
    disclosure,
    handleDisclosure,
    handleOffDisclosure,
    handleOnDisclosure,
  } = useDisclosure();

  const getter = {
    errors,
    disclosure,
    steps,
    isAlreadyRegistered,
  };

  const setter = {
    register,
    handleSubmit,
    setError,
    handleDisclosure,
    handleOffDisclosure,
    handleOnDisclosure,
    setSteps,
    setIsAlreadyRegistered,
  };

  return {
    ...getter,
    ...setter,
  };
};

export default useStates;
