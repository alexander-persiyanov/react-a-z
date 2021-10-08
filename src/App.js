import React,{useState,useRef} from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';

import PostList from './components/PostList';
import PostForm from './components/PostForm';

// import './App.css';
import  './styles/App.css'
function App() {

  const [posts,setPosts] = useState([
    {id:1,title:"Title text",body:"body text"},
    {id:2,title:"Title text",body:"body text"},
    {id:3,title:"Title text",body:"body text"},
    {id:4,title:"Title text",body:"body text"},
  ]);
 
  

  const bodyInputRef = useRef();
  const [valueInputRef,setValueInputRef] = useState('');


  const createPost = (post)=>{ 
    setPosts([...posts,post]);

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
          onChange={(e)=>{ setValueInputRef(bodyInputRef.current.value);}}
        />
      </div>
      <br/>

    </form>
       
    <PostForm create={createPost} ></PostForm>
    {posts.length !== 0 ? ( <PostList posts={posts} remove={removePost}></PostList>) : (<p style={{textAlign:'center', color:'red'}}><big> Posts not founds</big> </p>)  }
   


      
       
      

   </div>
  );
}

export default App;
