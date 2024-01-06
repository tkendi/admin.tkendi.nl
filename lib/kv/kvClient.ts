import axios from "axios";

export const setKvValue = async ({ key, value }: KvClientSetPropsType) => {
  await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/persist/kv`, {
    key,
    value,
  });
};

export const getKvValue = async ({ key }: KvClientGetPropsType) => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_HOST}/api/persist/kv?key=${key}`,
  );
  if (data) {
    return data;
  }
};
