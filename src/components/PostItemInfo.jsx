import{ React, useEffect, useState} from 'react';
import {useLocation,useParams} from 'react-router-dom';
import PostService from '../API/postService';
import { useFetching } from '../hooks/useFetching';
import Loader from './UI/loader/Loader';



const PostItemInfo = ()=>{
    let location = useLocation();
    let params = useParams();
    // console.log(params);
    // console.log(location);
    let [post,setPost] = useState({});
    let [comments,setComments] = useState([]);
    let [fetchPostById,isLoading,error] = useFetching(async()=>{
        let response = await PostService.getById(params.id);
       setPost(response.data);
    });

    let [fetchCommentsById,isCommLoading,commError] = useFetching(async()=>{
        let response = await PostService.getCommentsById(params.id);
        setComments(response.data);
    });
    

    useEffect(()=>{
        fetchPostById();
        fetchCommentsById();
    },[])
   console.log(commError);
    return( <div className="post_item_info">
        {error   ?  (<div>{error}</div>):''}
       
        {isLoading && isCommLoading ?  (<Loader></Loader>) : (
           
                <div>
                    <div>ID POST Param: {params.id}</div>
                    <div>ID: {post.id}</div>
                    <div>ID User : {post.userId}</div>
                    <div><strong>{post.title}</strong></div>
                    <div> {post.body}</div> 
                </div>
                
        ) }
        {commError  ?  (<div>{commError}</div>):''}

        {isCommLoading ?  (<Loader></Loader>) : (
          
            <div className="comments">
                <h2>Comments</h2>
                {comments.map((comment)=>{return(
                    <div className="comment-item" key={comment.id}>
                       
                        <div>
                            <div>Post id : {comment.postId}</div>
                            <div>Id : {comment.id}</div>
                            <div>Name :{comment.name}</div>
                            <div>Email : {comment.email}</div>
                            <div>{comment.body}</div>

                        </div>
                    </div>
                );})}
                
            </div>
               
        
           
            
        ) }
        
       
            
        

        </div>
    );

}; 
export default PostItemInfo;