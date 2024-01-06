import Redis from "ioredis";

export const redisConnect = new Redis({
  host: `${process.env.REDIS_HOST}`,
  port: Number(process.env.REDIS_PORT),
  password: `${process.env.REDIS_PASSWORD}`,
  lazyConnect: true,
  showFriendlyErrorStack: true,
  enableAutoPipelining: true,
  maxRetriesPerRequest: 0,
  retryStrategy: (times: number) => {
    if (times > 3) {
      throw new Error(`[Redis] Could not connect after ${times} attempts`);
    }

    return Math.min(times * 200, 1000);
  },
});
