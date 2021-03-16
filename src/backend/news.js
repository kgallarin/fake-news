/* eslint-disable */
import { send, HTTP_METHOD } from './index';

export default class news {
  static fetchNews(query) {
    return send('top-headlines', HTTP_METHOD.get, null, { query });
  }
  
  static fetchSources() {
    return send('sources', HTTP_METHOD.get, null,{});
  }
}
