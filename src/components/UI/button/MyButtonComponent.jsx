import{ React,useState} from 'react';
import  classes from './MyButtonComponent.module.css';
const MyButtonComponent = ({children,...props})=>{
    
   
    return(
       <button {...props} className={classes.myBtn} >{children}</button>

    );

}; 
export default MyButtonComponent;