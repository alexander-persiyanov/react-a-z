import{ React} from 'react';
import  classes from './MyInputComponent.module.css';
const MyInputComponent = (props)=>{
    
   
    return(
       <input className={classes.myInput} {...props}/>

    );

}; 
export default MyInputComponent;