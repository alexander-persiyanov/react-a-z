import{ React} from 'react';
import MyButtonComponent from './UI/button/MyButtonComponent';



const PostItem = ({number,post:{id,title,body},post,remove})=>{
    
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
            </div>


        </div>

    );

}; 
export default PostItem;