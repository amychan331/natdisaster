import axois from 'axios';
import { TWITTER_KEY } from 'react-native-dotenv';
ApiClient.init(TWITTER_KEY);

export default axois.create({
  baseURL: '',
  headers: {
    Authorization: `Bearer ${TWITTER_KEY}`
  }
});