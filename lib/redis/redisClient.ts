import axios from "axios";

export const setRedisValue = async ({ key, value }: KvClientSetPropsType) => {
  await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/store/persist`, {
    key,
    value,
  });
};

export const getRedisValue = async ({ key }: KvClientGetPropsType) => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_HOST}/api/store/persist?key=${key}`,
  );
  if (data) {
    return data;
  }
};
