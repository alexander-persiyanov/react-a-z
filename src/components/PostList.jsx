import{ React} from 'react';
import PostItem from './PostItem';

const PostList = ({posts,remove})=>{
   
    return(
        <div>
           <h1>Post List</h1>
           {posts.map((postItem ,index)=> {
        return ( <PostItem   remove={remove} number={index+1} key={postItem.id} post={postItem}></PostItem>);
        })}

        </div>

    );

}; 
export default PostList;