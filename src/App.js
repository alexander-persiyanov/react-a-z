import React,{useState,useRef} from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';

import PostList from './components/PostList';
import PostForm from './components/PostForm';

// import './App.css';
import  './styles/App.css'
import MySelect from './components/UI/mySelect/mySelect';
function App() {

  const [posts,setPosts] = useState([
    {id:1,title:"Title 3",body:"D"},
    {id:2,title:"Title 2",body:"A"},
    {id:3,title:"Title 1",body:"C"},
    {id:4,title:"Title 4",body:"B"},
  ]);

  const [selectedSort,setSelectedSort] = useState("");
 
  

  const bodyInputRef = useRef();
  const [valueInputRef,setValueInputRef] = useState('');


  const createPost = (post)=>{ 
    setPosts([...posts,post]);

  };
 
 const removePost = (post)=>{
  
  setPosts(posts.filter(p=>p.id !== post.id));
 }

 const sortPosts = (sort)=>{
    setSelectedSort(sort);
   
    //sort doesnt return new array but return same sorted array
    setPosts( [...posts].sort((a,b)=>{ return a[sort].localeCompare(b[sort]); }) );

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
          onChange={(e)=>{ sortPosts() }}
        />
      </div>
      <br/>

    </form>

    
       
    <PostForm create={createPost} ></PostForm>
    <br/>
    <hr/>
    <br/>
    <MySelect 
      value={selectedSort}
      defaultValue="Sort to" 
      onChange={sortPosts}
      options={[
        {name:"title",value:"title"},
        {name:"body",value:"body"}
      ]}
    />
      
      
    <br/>
    <hr/>
    <br/>
    {posts.length !== 0 ? ( <PostList posts={posts} remove={removePost}></PostList>) : (<p style={{textAlign:'center', color:'red'}}><big> Posts not founds</big> </p>)  }
   


      
       
      

   </div>
  );
}

export default App;
