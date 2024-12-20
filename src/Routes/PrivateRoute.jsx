import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
   const location = useLocation();

   const { user, loading } = useAuth()
   if (loading) return <span className="loading loading-spinner loading-lg"></span>
   if (user) return children;
   return <Navigate state={location.pathname} to='/login'></Navigate>

};

export default PrivateRoute;