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
import { useObserver } from '../hooks/useObserver';
import MySelect from '../components/UI/mySelect/mySelect';


function PostsLoading() {

  const [posts,setPosts] = useState([]);

  const bodyInputRef = useRef();
  
  const [valueInputRef,setValueInputRef] = useState('');
  const [modal,setModal] = useState(false);
  const [filter,setFilter] = useState({sort:'',query:''});
  const sortedAndSearchedPosts = usePosts(posts,filter.sort,filter.query);

  const [totalPage,setTotalPage] = useState(0);
  const [limitPosts,setLimitPosts] = useState(10);
  const [page,setPage] = useState(1);
  const lastElement = useRef();
  
   
  

  const [fetchPosts,isPostsLoading,postError] = useFetching( async (limit,page)=>{
    
    const  response = await postService.getAll(limit,page);
   console.log([...posts,...response.data]);
  
    setPosts(page==1? response.data : [...posts,...response.data]);
    let totalCount = response.headers['x-total-count'];
    setTotalPage(getPageCount(totalCount,limit));

  });

useObserver(lastElement,page<totalPage,isPostsLoading, ()=>{
    setTimeout(()=>setPage(page+1),1000);
    
})
//Mounted component


  useEffect(()=>{
    fetchPosts(limitPosts,page);
  },[page,limitPosts]);

  const createPost = (post)=>{ 
    setPosts([...posts,post]);
    setModal(false);

  };
 
 const removePost = (post)=>{
  
  setPosts(posts.filter(p=>p.id !== post.id));
 }

 const changePage = (page)=>{
  setPage(page);
//   fetchPosts(limitPosts,page);
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
    <MySelect 
        value={limitPosts} 
        onChange={value=>{setLimitPosts(value); setPage(1)}}
        defaultValue={"quantyty elements on page"}
        options={[
            {value: 5,name:'5'},
            {value: 10,name:'10'},
            {value: 20,name:'20'},
            {value: 25,name:'25'},
            {value: 50,name:'50'},
            {value: -1,name:'all'}

        ]}
    />
    {postError ? (<div>{postError}</div>):''}
   
     <PostList posts={sortedAndSearchedPosts} remove={removePost}></PostList>
     {isPostsLoading && 
        <div style={{display:'flex',justifyContent:'center',}}><Loader></Loader></div>
    }
     <div ref={ lastElement } style={{height:"20px",backgroundColor:"red"}}></div>
    
    
    <Pagination totalPage={totalPage} currentPage={page} changePage={changePage}></Pagination>
   
   
   


      
       
      

   </div>
  );
}

export default PostsLoading;
