import { NextApiRequest, NextApiResponse } from 'next';
import { airtableClient } from '../../../utils/airtable';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email, newsletter, investment } = JSON.parse(req.body);

    try {
      await airtableClient()('marketing-emails').create([
        {
          fields: {
            email,
            investment: String(investment),
            marketing: String(newsletter)
          }
        }
      ]);
      res.status(200).send({ message: 'OK' });
    } catch (error) {
      res.status(400).send({ message: 'FAIL', error });
    }
  }
};
