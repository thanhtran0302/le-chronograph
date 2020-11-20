import axios, { CancelTokenSource } from 'axios';

export const request = async (
  url: string,
  source: CancelTokenSource,
  options?: object
) => {
  try {
    const { data } = await axios(url, {
      cancelToken: source.token,
      ...options
    });
    return data;
  } catch (error) {
    throw error;
  }
};
