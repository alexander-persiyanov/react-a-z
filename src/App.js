import React,{useState,useRef,useEffect} from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';

import PostList from './components/PostList';
import PostForm from './components/PostForm';

// import './App.css';
import  './styles/App.css'

import PostFilter from './components/PostFilter';
import MyModal from './components/UI/myModal/MyModal';
import MyButtonComponent from './components/UI/button/MyButtonComponent';
import { usePosts } from './hooks/usePost';

import postService from './API/postService';
import Loader from './components/UI/loader/Loader';

function App() {

  const [posts,setPosts] = useState([]);

  const bodyInputRef = useRef();
  const [valueInputRef,setValueInputRef] = useState('');
  const [modal,setModal] = useState(false);
  const [filter,setFilter] = useState({sort:'',query:''});
  const sortedAndSearchedPosts = usePosts(posts,filter.sort,filter.query);

  const [isPostsLoading,setIsPostsLoading] = useState(true);


//Mounted component
  useEffect(()=>{
    fetchPosts();
  },[]);

  const createPost = (post)=>{ 
    setPosts([...posts,post]);
    setModal(false);

  };
 
 const removePost = (post)=>{
  
  setPosts(posts.filter(p=>p.id !== post.id));
 }


 async function fetchPosts(){
  setIsPostsLoading(true);
  let posts = await postService.getAll();
  // console.log(posts)
   setPosts(posts);
   setIsPostsLoading(false);
  
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
    {isPostsLoading ? (<div style={{display:'flex',justifyContent:'center',}}><Loader></Loader></div>) : ( <PostList posts={sortedAndSearchedPosts} remove={removePost}></PostList>)}
    
   
   
   


      
       
      

   </div>
  );
}

export default App;
