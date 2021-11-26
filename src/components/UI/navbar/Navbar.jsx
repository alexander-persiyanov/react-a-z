import cl from './navbar.module.css';
import {Link,useNavigate} from 'react-router-dom';
import MyButtonComponent from '../button/MyButtonComponent';
import { useContext } from 'react';
import { AuthContext } from '../../../context/context';
const Navbar = ()=>{
    let navigate = useNavigate();
    let {isAuth,setIsAuth} = useContext(AuthContext);
    const logout = ()=>{
        setIsAuth(false);
        localStorage.removeItem('auth');
    }
    return(
        <div className={cl.navbar}>
            <button onClick={()=>navigate(-1)}>go back</button>
            <button type="button" onClick={logout}>cancel auth</button>
          <div className={cl.navbar__links}>
              
              <Link to="posts">posts </Link> |
              <Link to="postsloading">posts loading</Link> |
              <Link to="about">about </Link> |
              <Link to="">home </Link> |
          </div>


      </div>
    );


}
export default Navbar;