import { NextApiRequest, NextApiResponse } from 'next';
import { airtableClient } from '../../../utils/airtable';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const {
      email,
      newsletter = true,
      investment = true,
      investor = false
    } = JSON.parse(req.body);

    console.log({
      email,
      newsletter,
      investment,
      investor
    });
    try {
      if (!investor) {
        await airtableClient()('marketing-emails').create([
          {
            fields: {
              email,
              investment: String(investment),
              marketing: String(newsletter)
            }
          }
        ]);
      } else {
        await airtableClient()('investor-emails').create([
          {
            fields: {
              email
            }
          }
        ]);
      }
      res.status(200).send({ message: 'OK' });
    } catch (error) {
      res.status(400).send({ message: 'FAIL', error });
    }
  }
};
