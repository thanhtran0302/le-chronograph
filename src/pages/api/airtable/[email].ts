import { NextApiRequest, NextApiResponse } from 'next';
import { airtableClient } from '../../../utils/airtable';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req;
  const { email } = query;

  try {
    await airtableClient()('emails').create([
      {
        fields: {
          email
        }
      }
    ]);
    res.status(200).send({ message: 'OK' });
  } catch (error) {
    res.status(400).send({ message: 'FAIL', error });
  }
};
