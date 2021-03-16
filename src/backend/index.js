/* eslint-disable */
import axios from 'axios';
import Url from '@/services/url';
import news from './news';

export default {
  news,
};

export const HTTP_METHOD = {
  get: 'get',
  post: 'post',
  patch: 'patch',
  delete: 'delete',
};

export const send = async (uri, httpMethod = HTTP_METHOD.get, body = null, options = {}) => {
  const appKey = { apiKey: `${process.env.VUE_APP_API_KEY}` };
  // Append query params, if any
  uri = options.query ? appendQuery(uri, Object.assign(options.query, appKey)) : appendQuery(uri, appKey);
  uri = `${process.env.VUE_APP_API_URL}/${uri}`;
  let response = {};

  switch (httpMethod) {
    case HTTP_METHOD.get: {
      response = await axios.get(uri, options);
      break;
    }
    case HTTP_METHOD.post: {
      response = await axios.post(uri, body, options);
      break;
    }
    case HTTP_METHOD.patch: {
      response = await axios.patch(uri, body, options);
      break;
    }
    case HTTP_METHOD.delete: {
      response = await axios.delete(uri, options);
      break;
    }
    default: return;
  }

  return response.data;
};

const appendQuery = (uri, query = {}) => uri + Url.toQueryString(query);
