import { NextApiRequest, NextApiResponse } from 'next';
import { SEND_IN_BLUE_KEY } from '../../constants/common';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email } = JSON.parse(req.body);
    const url: string = 'https://api.sendinblue.com/v3/contacts';
    const options: RequestInit = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'api-key': SEND_IN_BLUE_KEY
      },
      body: JSON.stringify({
        listIds: [3],
        updateEnabled: false,
        email
      })
    };

    try {
      await fetch(url, options);

      res.send({
        message: 'EMAIL_INSERTED'
      });
    } catch (error) {
      res.send({
        message: 'ERROR_INSERT_EMAIL'
      });
    }
  }
};
