import axios from 'axios';

export const getOpenaiResponse = async (input: string) => {
  const response = await axios.post(
    'http://pocki-api-env-1.eba-pprtwpab.us-east-1.elasticbeanstalk.com/api/getOpenaiResponse',
    { input }
  );

  return response.data;
};
