import React,{useState,useRef,useMemo} from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';

import PostList from './components/PostList';
import PostForm from './components/PostForm';

// import './App.css';
import  './styles/App.css'
import MySelect from './components/UI/mySelect/mySelect';
import MyInputComponent from './components/UI/input/MyInputComponent';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/myModal/MyModal';
import MyButtonComponent from './components/UI/button/MyButtonComponent';
import { usePosts } from './hooks/usePost';


function App() {

  const [posts,setPosts] = useState([
    {id:1,title:"Title 3",body:"D"},
    {id:2,title:"Title 2",body:"A"},
    {id:3,title:"Title 1",body:"C"},
    {id:4,title:"Title 4",body:"B"},
  ]);


 
  

  const bodyInputRef = useRef();
  const [valueInputRef,setValueInputRef] = useState('');
  const [modal,setModal] = useState(false);
 

  const [filter,setFilter] = useState({sort:'',query:''});

  const sortedAndSearchedPosts = usePosts(posts,filter.sort,filter.query);

  const createPost = (post)=>{ 
    setPosts([...posts,post]);
    setModal(false);

  };
 
 const removePost = (post)=>{
  
  setPosts(posts.filter(p=>p.id !== post.id));
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
    
    <PostList posts={sortedAndSearchedPosts} remove={removePost}></PostList>
   
   


      
       
      

   </div>
  );
}

export default App;
