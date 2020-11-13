import Airtable from 'airtable';
import { AIRTABLE_EMAIL_BASE_ID, AIRTABLE_KEY } from '../constants/common';

export const airtableClient = () =>
  new Airtable({
    apiKey: AIRTABLE_KEY
  }).base(AIRTABLE_EMAIL_BASE_ID);
