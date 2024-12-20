import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useAuth = () => {
    const auths = useContext(AuthContext);

    return auths;
};

export default useAuth;