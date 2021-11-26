import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/context";

const PrivateRoute = ({component})=>{
    let {isAuth,setIsAuth} = useContext(AuthContext);
    
   
    if(isAuth){
        
        // return children;
        return component;
    }else{
        return <Navigate to="/login" replace={true} />
    }
 
   
    
   
}
export default PrivateRoute;