import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  // https://assignment-11-server-side-red.vercel.app
  baseURL: 'https://assignment-11-server-side-red.vercel.app',
  withCredentials: true
})

const useAxiosSecure = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.response.use(res => {
      return res;
    }, error => {
      if (error.response.status === 401 || error.response.status === 403) {
        console.log('Logout the user');
        logout()
          .then(() => {
            navigate('/login');
          })
          .catch(error => console.error(error))
      }
      console.log("Error catch here! ", error.response)
    });
  }, [])
  return axiosSecure;
};

export default useAxiosSecure;