import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";
import useAxiosSecure from "./useAxiosSecure";


const useBorrow = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: isBorrow = false, refetch } = useQuery({
        queryKey: ['borrow'],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/borrowCheck?email=${user?.email}`)
            return data.message;
        }
    })
    return [isBorrow, refetch]
};

export default useBorrow;