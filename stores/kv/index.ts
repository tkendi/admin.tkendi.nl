import { StateStorage } from 'zustand/middleware';

import { getKvValue, setKvValue } from '@/lib/kv/kvClient';

const debouncePersist = (name: string, value: string) => {
  setTimeout(async () => {
    const key = name;
    await setKvValue({ key, value });
  }, 500);
};

export const kvStsore: StateStorage = {
  getItem: async (key: string) => {
    const data = await getKvValue({ key });
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
