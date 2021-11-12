import{ React} from 'react';
import { Link,useNavigate} from 'react-router-dom';
import MyButtonComponent from './UI/button/MyButtonComponent';



const PostItem = ({number,post:{id,title,body},post,remove})=>{
    let navigate = useNavigate();

    const handleClick = ()=>{
        navigate(`${id}`);

        
       
    }
    return(
        <div className="post">
            <div className="post__content">
            <p><strong>{number}: {title}</strong></p>
            <p>id:<small>{id}</small></p>
          
            <div>
                {body}
            </div>
            
            </div>
            <div className="post__btn">
            
                <MyButtonComponent onClick={()=>{remove(post)}} >delete</MyButtonComponent>
                <MyButtonComponent onClick={handleClick} >view post</MyButtonComponent>
               
                {/* <Link to={`${id}`}>{id}</Link> */}
            </div>


        </div>

    );

}; 
export default PostItem;