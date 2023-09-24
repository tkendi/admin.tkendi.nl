import { authStore } from './auth';

export const useStore = () => {
  return {
    authStore: authStore.getState(),
  };
};
