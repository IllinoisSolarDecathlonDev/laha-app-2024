import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get('devices/api');
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};