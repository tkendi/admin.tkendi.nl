// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  refreshToken?: string;
  errorMsg?: string;
};

const OauthMiddlewareHandler = (
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) => {
  if (req.method !== 'POST')
    return res.status(400).json({ errorMsg: 'Invalid Method' });

  const refreshToken = req.body.data.refreshToken;

  if (refreshToken) {
    res.setHeader('set-cookie', [
      `refreshToken=${refreshToken}; max-age=31536000; path=/;`,
    ]);
  }
  res.status(200).json({ refreshToken });
};

export default OauthMiddlewareHandler;
