import {React,useRef }from 'react';
import PostItem from './PostItem';
import cl from './PostList.module.css';



const PostList = ({posts,remove})=>{
      
   
    if(posts.length==0){
        return(<p style={{textAlign:'center', color:'red'}}><big> Posts not founds</big> </p>);
    }else{
        return(
        
            <div>
                <h1>Post List</h1>
               
             
                {posts.map((postItem ,index)=> {
                 
                    return(
                       
                            <PostItem   key ={postItem.id} remove={remove} number={index+1}  post={postItem}/>
                          
                       
                    );

                }
                           
                            
                )}
             
              
        
        

            </div>
            



        );
    }

}; 
export default PostList;