import React,{useState,useRef,useEffect, useMemo} from 'react';
import ClassCounter from '../components/ClassCounter';
import Counter from '../components/Counter';

import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import  '../styles/App.css'

import PostFilter from '../components/PostFilter';
import MyModal from '../components/UI/myModal/MyModal';
import MyButtonComponent from '../components/UI/button/MyButtonComponent';
import { usePosts } from '../hooks/usePost';
import { useFetching } from '../hooks/useFetching';

import postService from '../API/postService';
import Loader from '../components/UI/loader/Loader';

import {getPageCount} from '../utils/pages';

import Pagination from '../components/UI/pagination/Pagination';
import { Outlet } from 'react-router';

function Posts() {

  const [posts,setPosts] = useState([]);

  const bodyInputRef = useRef();
  const [valueInputRef,setValueInputRef] = useState('');
  const [modal,setModal] = useState(false);
  const [filter,setFilter] = useState({sort:'',query:''});
  const sortedAndSearchedPosts = usePosts(posts,filter.sort,filter.query);

  const [totalPage,setTotalPage] = useState(0);
  const [limitPosts,setLimitPosts] = useState(5);
  const [page,setPage] = useState(1);

  

  const [fetchPosts,isPostsLoading,postError] = useFetching( async (limit,page)=>{
    
    const  response = await postService.getAll(limit,page);
   
    setPosts(response.data);
    let totalCount = response.headers['x-total-count'];
    setTotalPage(getPageCount(totalCount,limit));

  });

 


//Mounted component
  useEffect(()=>{
    fetchPosts(limitPosts,page);
  },[]);

  const createPost = (post)=>{ 
    setPosts([...posts,post]);
    setModal(false);

  };
 
 const removePost = (post)=>{
  
  setPosts(posts.filter(p=>p.id !== post.id));
 }

 const changePage = (page)=>{
  setPage(page);
  fetchPosts(limitPosts,page);
 }

  
  return (
    <div className="App">
    <Counter/>
    <ClassCounter/>
    <br/>
    
    <form>
      <div>
        <p><strong> Value From Input with useRef:</strong> {valueInputRef}</p>  
       
        <input 
          ref={bodyInputRef} 
          type="text" 
          placeholder="insert value" 
          onChange={(e)=>{ setValueInputRef(e.target.value) }}
        />
      </div>
      <br/>

    </form>

  
    <MyButtonComponent type="button" onClick={()=>{setModal(true)}}>Add post</MyButtonComponent>
    <MyModal visible={modal} setVisible={setModal}>

          <PostForm create={createPost} ></PostForm>
      
    </MyModal>
    <br/>
    <hr/>
    <br/>

   
    <PostFilter filter = {filter} setFilter = {setFilter} ></PostFilter>
    {postError ? (<div>{postError}</div>):''}
    {isPostsLoading ? (<div style={{display:'flex',justifyContent:'center',}}><Loader></Loader></div>) : ( <PostList posts={sortedAndSearchedPosts} remove={removePost}></PostList>)}
    
    <Pagination totalPage={totalPage} currentPage={page} changePage={changePage}></Pagination>
   
   
   


      
       
      

   </div>
  );
}

export default Posts;
