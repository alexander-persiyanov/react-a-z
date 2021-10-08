import{ React,useState} from 'react';

import MyButtonComponent from './UI/button/MyButtonComponent';
import MyInputComponent from './UI/input/MyInputComponent';

const PostForm = ({create,...rest})=>{
    const [post,setPost] = useState({title:'',body:''});

    const addPostHandler = (e)=>{ 
        e.preventDefault();

        create({...post,id:Date.now()});
       
        setPost({title:'',body:''});
       
    };
    
    return(
        <form>
           
    
            <label>Post Title</label>  
            <MyInputComponent  
            type="text" value={post.title} 
            onChange={(e)=>{ setPost({...post,title:e.target.value})} }
            placeholder="Insert title"
            />
            <label>Post Body</label>
            <MyInputComponent  
            type="text" 
            value={post.body} 
            onChange={(e)=>{ setPost({...post,body:e.target.value})} }
            placeholder="Insert body "
            />
            <MyButtonComponent  onClick={e=>addPostHandler(e)} >Add post</MyButtonComponent>
      </form>

    );

}; 
export default PostForm;