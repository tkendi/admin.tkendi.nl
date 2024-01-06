import type { NextApiRequest, NextApiResponse } from "next";

import { redisConnect } from "@/lib/redis/redisConnection";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  let data;
  switch (req.method) {
    case "GET":
      data = await redisConnect.get(req.query.key as string);
      break;
    case "POST":
      await redisConnect.del([req.body.key]);
      //redis에 데이터를 담을때 유효시간을 짧게 설정해 주는것이 좋습니다.
      data = await redisConnect.set(
        req.body.key as string,
        req.body.value,
        "EX",
        18000,
      );
      break;
  }
  res.status(200).json(data);
}
