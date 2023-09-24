import { StateStorage } from 'zustand/middleware';

import { getRedisValue, setRedisValue } from '@/lib/redis';

const debouncePersist = (name: string, value: string) => {
  setTimeout(async () => {
    const key = name;
    await setRedisValue({ key, value });
  }, 500);
};

export const kvStsore: StateStorage = {
  getItem: async (key: string) => {
    const data = await getRedisValue({ key });
    return data;
  },

  setItem: (key: string, value: string) => {
    debouncePersist(key, value);
    sessionStorage.setItem(key, value);
  },

  removeItem: (key: string) => {
    sessionStorage.removeItem(key);
  },
};
