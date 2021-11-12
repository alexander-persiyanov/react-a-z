import {Link,Outlet} from 'react-router-dom';
import Navbar from '../UI/navbar/Navbar';


function LayoutMain() {

  
  
    return (
      <div >
         
          <Navbar></Navbar>
          LayoutMain
          <Outlet></Outlet>
     </div>
    );
  }
  
  export default LayoutMain;
  