import { useContext } from "react";
import { useNavigate } from "react-router";
import MyButtonComponent from "../components/UI/button/MyButtonComponent";
import MyInputComponent from "../components/UI/input/MyInputComponent";
import { AuthContext } from "../context/context";

function Login() {
    let {isAuth,setIsAuth} = useContext(AuthContext);
    let navigate = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth',true);
        navigate('/posts');
        // alert("submit");
    }
  
  
    return (
      <div >
          <h2>Login Form</h2>
          <form onSubmit={(e)=>handleSubmit(e)}>
              <MyInputComponent type="text"  placeholder="insert login"/>
              <MyInputComponent type="password" placeholder="insert password"/>
              <MyButtonComponent type="submit" >Login</MyButtonComponent>
           
          </form>
     </div>
    );
  }
  
  export default Login;
  