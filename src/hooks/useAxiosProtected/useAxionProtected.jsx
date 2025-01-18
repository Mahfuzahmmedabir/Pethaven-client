import axios from 'axios';


const axionProtected = axios.create({
  baseURL: 'http://localhost:5000',
});

const useAxionProtected = () => {
  return axionProtected;
};

export default useAxionProtected;
