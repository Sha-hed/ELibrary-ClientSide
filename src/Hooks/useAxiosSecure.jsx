import axios from "axios";

const axiousSecure = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true
})

const useAxiosSecure = () => {
  return axiousSecure;
};

export default useAxiosSecure;