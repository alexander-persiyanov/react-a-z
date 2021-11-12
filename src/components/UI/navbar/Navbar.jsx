import cl from './navbar.module.css';
import {Link,useNavigate} from 'react-router-dom';
const Navbar = ()=>{
    let navigate = useNavigate();
    
    return(
        <div className={cl.navbar}>
            <button onClick={()=>navigate(-1)}>go back</button>
          <div className={cl.navbar__links}>
              
              <Link to="posts">posts </Link>
              <Link to="about">about </Link>
              <Link to="">home </Link>
          </div>


      </div>
    );


}
export default Navbar;