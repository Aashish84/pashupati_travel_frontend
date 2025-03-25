import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({role}){
    
    const token = useSelector((state) => state.auth.token);
    const location = useLocation();

    if(!token){
        return <Navigate to="/login" state={{from:location}} replace />
    }

    return <Outlet/>
}
 
export default ProtectedRoute;